# [C](#)onqure [o](#)f  [C](#)ompletion

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fneoclide%2Fcoc.nvim.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fneoclide%2Fcoc.nvim?ref=badge_shield)
[![](https://img.shields.io/badge/doc-%3Ah%20coc.txt-red.svg)](doc/coc.txt)


Coc is a completion framework of [neovim](https://github.com/neovim/neovim)
while providing featured language server support.

Checkout [doc/coc.txt](/doc/coc.txt) for vim interface.

## Pros.

* Async generate complete items
* Fuzzy match with smart case.
* Full featured completion support defined in LSP.
* Built in language server extensions, like tsserver, tslint etc.
* Custom language server configuration support.

## Contents

### [Installation](https://github.com/neoclide/coc.nvim/wiki/Install-coc.nvim)

### [Completion with sources](https://github.com/neoclide/coc.nvim/wiki/Completion-with-sources)

* [Trigger mode of completion](https://github.com/neoclide/coc.nvim/wiki/Completion-with-sources#trigger-mode-of-completion)
* [Snippet completion](https://github.com/neoclide/coc.nvim/wiki/Completion-with-sources#snippet-completion)
* [Use `<Tab>` or custom key for trigger completion](https://github.com/neoclide/coc.nvim/wiki/Completion-with-sources#use-tab-or-custom-key-for-trigger-completion)
* [Improve completion experience](https://github.com/neoclide/coc.nvim/wiki/Completion-with-sources#improve-completion-experience)
* [Completion sources](https://github.com/neoclide/coc.nvim/wiki/Completion-with-sources#completion-sources)


### [Using configuration file](https://github.com/neoclide/coc.nvim/wiki/Using-configuration-file)

* [Configuration file resolve](https://github.com/neoclide/coc.nvim/wiki/Using-configuration-file#configuration-file-resolve)
* [Default COC preferences](https://github.com/neoclide/coc.nvim/wiki/Using-configuration-file#default-coc-preferences)
* [Configuration for sources](https://github.com/neoclide/coc.nvim/wiki/Using-configuration-file#configuration-for-sources)
* [Extension configuration](https://github.com/neoclide/coc.nvim/wiki/Using-configuration-file#extension-configuration)


### [Language servers](https://github.com/neoclide/coc.nvim/wiki/Language-servers)

* [Supported features](https://github.com/neoclide/coc.nvim/wiki/Language-servers#supported-features)
* [Built in server extensions](https://github.com/neoclide/coc.nvim/wiki/Language-servers#built-in-server-extensions)
* [Register custom language servers](https://github.com/neoclide/coc.nvim/wiki/Language-servers#register-custom-language-servers)

### [Create custom source](https://github.com/neoclide/coc.nvim/wiki/Create-custom-source)

* [Start by a simple example](https://github.com/neoclide/coc.nvim/wiki/Create-custom-source#start-by-a-simple-example)
* [Default options of source](https://github.com/neoclide/coc.nvim/wiki/Create-custom-source#default-options-of-source)
* [Options for complete](https://github.com/neoclide/coc.nvim/wiki/Create-custom-source#options-for-complete)
* [Result of complete](https://github.com/neoclide/coc.nvim/wiki/Create-custom-source#result-of-complete)
* [Optional functions](https://github.com/neoclide/coc.nvim/wiki/Create-custom-source#optional-functions)

### [F.A.Q](https://github.com/neoclide/coc.nvim/wiki/F.A.Q)

## Trouble shooting

When you find the plugin is not working as you would expected, run command
`:checkhealth` and make use that output from `coc.nvim` are `OK`.

To get the log file, run shell command:

    node -e 'console.log(path.join(os.tmpdir(), "coc-nvim.log"))'

You can also use environment variable to change logger behaviour:

* `$NVIM_COC_LOG_LEVEL` set to `debug` for debug messages.
* `$NVIM_COC_LOG_FILE` set the file path of log file.

Note: Coc would disable itself when there is vim error during autocmd.

## LICENSE

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fneoclide%2Fcoc.nvim.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fneoclide%2Fcoc.nvim?ref=badge_large)
