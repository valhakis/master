" check if earlier file has defined syntax already

nmap ,so :syn off <bar> syn on <bar> so val.vim <cr>
if exists("b:current_syntax")
  finish
endif

set filetype=val

" keywords
syn keyword VallBlockCmd RA Dec SpectralType Mass Distance AbsMag

" matches

" regioins

" Integer with - + or nothing in front
syn match VallNumber '\d\+'
syn match VallNumber '[-+]\d\+'

" Floating point number with decimal no E or e 
syn match VallNumber '[-+]\d\+\.\d*'

" Floating point like number with E and no decimal point (+,-)
syn match VallNumber '[-+]\=\d[[:digit:]]*[eE][\-+]\=\d\+'
syn match VallNumber '\d[[:digit:]]*[eE][\-+]\=\d\+'

" Floating point like number with E and decimal point (+,-)
syn match VallNumber '[-+]\=\d[[:digit:]]*\.\d*[eE][\-+]\=\d\+'
syn match VallNumber '\d[[:digit:]]*\.\d*[eE][\-+]\=\d\+'

syn keyword VallTodo contained TODO FIXME XXX NOTE
syn match VallComment "#.*$" contains=VallTodo
syn match VallComment "//.*$"
syn match ValItem /\s/
syn match ValItem ".js$"

"----------------------------------------------------------------
" Celestia Star Catalog Numbers
"----------------------------------------------------------------

" Regular int like number with - + or nothing in front
syn match VallNumber '\d\+' contained display
syn match VallNumber '[-+]\d\+' contained display

" Floating point number with decimal no E or e (+,-)
syn match VallNumber '\d\+\.\d*' contained display
syn match VallNumber '[-+]\d\+\.\d*' contained display

" Floating point like number with E and no decimal point (+,-)
syn match VallNumber '[-+]\=\d[[:digit:]]*[eE][\-+]\=\d\+' contained display
syn match VallNumber '\d[[:digit:]]*[eE][\-+]\=\d\+' contained display

" Floating point like number with E and decimal point (+,-)
syn match VallNumber '[-+]\=\d[[:digit:]]*\.\d*[eE][\-+]\=\d\+' contained display
syn match VallNumber '\d[[:digit:]]*\.\d*[eE][\-+]\=\d\+' contained display

syn region VallString start='"' end='"' contained
syn region VallDesc start='"' end='"'

syn match VallHip '\d\{1,6}' nextgroup=VallString
syn region VallDescBlock start="{" end="}" fold transparent contains=ALLBUT,VallHip,VallString

syn keyword VallBlockCmd RA Dec Distance AbsMag nextgroup=VallNumber
syn keyword VallBlockCmd SpectralType nextgroup=VallDesc

let b:current_syntax = "Val"

hi def link VallTodo        Todo
hi def link VallComment     Comment
hi def link VallBlockCmd    Statement
hi def link VallHip         Type
hi def link VallString      Constant
hi def link VallDesc        PreProc
hi def link VallNumber      Constant

hi ValItem ctermfg=yellow

noremap <F12> <Esc>:syntax sync fromstart<CR>
inoremap <F12> <C-o>:syntax sync fromstart<CR>

hi NonText ctermfg=236
