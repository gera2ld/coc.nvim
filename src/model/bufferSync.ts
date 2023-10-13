'use strict'
import type Documents from '../core/documents'
import events from '../events'
import { DidChangeTextDocumentParams } from '../types'
import { disposeAll } from '../util'
import { Disposable } from '../util/protocol'
import type Document from './document'

export interface SyncItem extends Disposable {
  onChange?(e: DidChangeTextDocumentParams): void
  onTextChange?(): void
}

/**
 * Buffer sync support, document is always attached and not command line buffer.
 */
export default class BufferSync<T extends SyncItem> {
  private disposables: Disposable[] = []
  private itemsMap: Map<number, { uri: string, item: T }> = new Map()
  constructor(private _create: (doc: Document) => T | undefined, documents: Documents) {
    let { disposables } = this
    for (let doc of documents.attached()) {
      this.create(doc)
    }
    documents.onDidOpenTextDocument(e => {
      this.create(documents.getDocument(e.bufnr))
    }, null, disposables)
    documents.onDidChangeDocument(e => {
      this.onChange(e)
    }, null, disposables)
    documents.onDidCloseDocument(e => {
      this.delete(e.bufnr)
    }, null, disposables)
    events.on('LinesChanged', this.onTextChange, null, disposables)
  }

  private onTextChange(bufnr: number): void {
    let o = this.itemsMap.get(bufnr)
    if (o && typeof o.item.onTextChange == 'function') {
      o.item.onTextChange()
    }
  }

  public get items(): ReadonlyArray<T> {
    return Array.from(this.itemsMap.values()).map(x => x.item)
  }

  public getItem(bufnr: number | string): T | undefined {
    if (typeof bufnr === 'number') {
      return this.itemsMap.get(bufnr)?.item
    }
    let o = Array.from(this.itemsMap.values()).find(v => {
      return v.uri == bufnr
    })
    return o ? o.item : undefined
  }

  public create(doc: Document): void {
    let o = this.itemsMap.get(doc.bufnr)
    if (o) o.item.dispose()
    let item = this._create(doc)
    if (item) this.itemsMap.set(doc.bufnr, { uri: doc.uri, item })
  }

  private onChange(e: DidChangeTextDocumentParams): void {
    let o = this.itemsMap.get(e.bufnr)
    if (o && typeof o.item.onChange == 'function') {
      o.item.onChange(e)
    }
  }

  private delete(bufnr: number): void {
    let o = this.itemsMap.get(bufnr)
    if (o) {
      o.item.dispose()
      this.itemsMap.delete(bufnr)
    }
  }

  public reset(): void {
    for (let o of this.itemsMap.values()) {
      o.item.dispose()
    }
    this.itemsMap.clear()
  }

  public dispose(): void {
    disposeAll(this.disposables)
    for (let o of this.itemsMap.values()) {
      o.item.dispose()
    }
    this._create = undefined
    this.itemsMap.clear()
  }
}
