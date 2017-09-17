call plug#begin('~/.vim/plugged')
Plug 'Haron-Prime/Antares'
Plug 'cakebaker/scss-syntax.vim'
Plug 'scrooloose/nerdtree' 
Plug 'tpope/vim-surround'
Plug 'nono/vim-handlebars'
Plug 'tpope/vim-repeat'
Plug 'mattn/emmet-vim'
Plug 'pangloss/vim-javascript'
Plug 'Shougo/neocomplete.vim'
Plug 'vim-utils/vim-man'
Plug 'tikhomirov/vim-glsl'
Plug 'digitaltoad/vim-pug'
Plug 'Yggdroot/indentLine'
Plug 'jwalton512/vim-blade'
"Plug 'python-mode/python-mode'
Plug 'nono/vim-handlebars'
Plug 'etnadji/vim-epub'
call plug#end()


colorscheme antares

set backupdir=~/.vim/backup/
set directory=~/.vim/swp/

set tabstop=2 shiftwidth=2 softtabstop=2 expandtab
set nowrap incsearch hlsearch splitbelow mouse=n

set autoindent copyindent number

" set softtabstop=0
" set noexpandtab
" set shiftround

let g:NERDTreeWinPos = "right"
let NERDTreeShowHidden = 1
let g:NERDTreeQuitOnOpen = 1
let g:acp_enableAtStartup = 1
let g:neocomplete#enable_at_startup = 1
let g:neocomplete#enable_smart_case = 1
let g:neocomplete#sources#syntax#min_keyword_length = 2

autocmd FileType css setlocal omnifunc=csscomplete#CompleteCSS
autocmd FileType html,markdown setlocal omnifunc=htmlcomplete#CompleteTags
autocmd FileType javascript setlocal omnifunc=javascriptcomplete#CompleteJS
autocmd FileType python setlocal omnifunc=pythoncomplete#Complete
autocmd FileType xml setlocal omnifunc=xmlcomplete#CompleteTags

"let g:user_emmet_expandabbr_key='<tab>'
"unmap ,start

let g:user_emmet_leader_key=','

au BufRead,BufNewFile *.vs,*.fs set filetype=glsl syntax=glsl

nmap ,edit :tabedit ~/.vimrc <cr>
nmap ,so :so ~/.vimrc <cr>
nmap ,no :noh <cr>
nmap \e :edit % <cr>
nmap ,ne :NERDTree <cr>
nmap ,nf :NERDTreeFind <cr>
nmap ,install :w <bar> so ~/.vimrc <bar> PlugInstall <cr>
"nmap \mr :w <bar> !./start.sh <cr>
nmap <leader>k <Plug>(Man) 
nmap ,k <Plug>(Man) 

function! MRun()
  let arguments = input('arguments: ')
  execute "!./start.sh " . arguments
endfunction

nmap ,start :w <bar> call MRun() <cr>
nmap \mr :w <bar> call MRun() <cr>

" CUSTOM TEMPLATE FUNCTION
" ==========================================================
function! GetTemplate()
  " get the current line number
  let line = line('.')
  " get the current column number
  let col = col('.')
  " set cursor 1 character backwards
  call cursor(line, col-1)
  " templates directory path
  let path = $HOME . '/master/nvim/templates'
  " current file extension
  let ext = expand('%:e')
  if ext == 'hbs'
    let ext = 'html'
  endif
  " the word under cursor
  let word = expand('<cWORD>')
  " the result file
  let result = path . '/' . word . '.' . ext
  " if the file exists
  if filereadable(result)
    " delete current line
    d
    " go one line up
    call cursor(line-1, 0)
    " read the file content
    "execute "read" . result
    execute (line == 1 ? '-1' : '') . "read" . result
    execute "normal! =G"
  else
    echo result . ' does not exist'
  endif
  return ''
endfunction
"map <c-g> :call GetTemplate() <cr>
"inoremap <c-l> <c-r>=GetTemplate() <cr>
imap ,l <c-r>=GetTemplate() <cr><esc>
" ==========================================================

" ALTERNATE FILE [,al]
" :e #
" ==========================================================
nmap ,al :e # <cr>
" ==========================================================

" inoremap <space><space> <esc>/<++><Enter>
nmap <space><space> /<++><cr>zt:noh<cr>
" <++>

" EDIT LOCAL MAKEFILE [,ma]
" :e #
" ==========================================================
nmap ,ma :tabe makefile <cr>
" ==========================================================
hi Search ctermfg=red ctermbg=none
hi IncSearch ctermbg=yellow ctermfg=black
