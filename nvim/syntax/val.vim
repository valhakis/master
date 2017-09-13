if exists('b:current_syntax') | finish | endif

syntax match ValVar "\k\+" nextgroup=sipleAssignment
syntax match ValKey /^[^=]\+/
syntax match ValValue /^[^=]\+$/
syntax match ValTag "<++>"

hi ValTag ctermfg=blue
hi def link ValVar Identifier
hi def link ValKey Statement
hi def link ValValue String

" hi ValVar ctermfg=white
" hi ValKey ctermfg=white
" hi ValValue ctermfg=white

let b:current_syntax = 'val'

