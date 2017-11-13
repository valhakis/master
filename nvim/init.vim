set nocompatible
syntax on
set nowrap
set encoding=utf8


call plug#begin('~/.vim/plugged')
Plug 'Haron-Prime/Antares'
Plug 'mattn/emmet-vim'
Plug 'tpope/vim-repeat'
Plug 'scrooloose/nerdtree' 
Plug 'jistr/vim-nerdtree-tabs'
Plug 'pangloss/vim-javascript'
Plug 'Shougo/neocomplete.vim'

"Plug 'joukevandermaas/vim-ember-hbs'
"Plug 'tmhedberg/matchit'
"Plug 'alvan/vim-closetag'
"Plug 'bling/vim-airline'
"Plug 'mhinz/vim-signify'
"Plug 'ap/vim-buftabline'
"Plug 'airblade/vim-gitgutter'
"Plug 'ternjs/tern_for_vim'
"Plug 'majutsushi/tagbar'
"Plug 'jiangmiao/auto-pairs'
"Plug 'vim-airline/vim-airline-themes'
"Plug 'rschmukler/pangloss-vim-indent'
"Plug 'mustache/vim-mustache-handlebars'
"Plug 'tpope/vim-commentary'
"Plug 'ctrlpvim/ctrlp.vim'
"Plug 'moll/vim-node'
"Plug 'evidens/vim-twig'
"Plug 'leafgarland/typescript-vim'
"Plug 'cakebaker/scss-syntax.vim'
"Plug 'juvenn/mustache.vim'
"Plug 'tpope/vim-surround'
"Plug 'nono/vim-handlebars'
"Plug 'jwalton512/vim-blade'
"Plug 'vim-utils/vim-man'
"Plug 'tikhomirov/vim-glsl'
"Plug 'digitaltoad/vim-pug'
"Plug 'Townk/vim-autoclose'
"Plug 'tpope/vim-fugitive'
"Plug 'elzr/vim-json'
"Plug 'hushicai/tagbar-javascript.vim'
"Plug 'easymotion/vim-easymotion'
"Plug 'jelera/vim-javascript-syntax'
"Plug 'leshill/vim-json'
"Plug 'briancollins/vim-jst'
"Plug 'hail2u/vim-css3-syntax'
"Plug 'Haron-Prime/Antares'
"Plug 'scrooloose/nerdtree' 
"Plug 'valhakis/vim' 
"Plug 'jistr/vim-nerdtree-tabs'
"Plug 'tpope/vim-repeat'
"Plug 'mattn/emmet-vim'
"Plug 'pangloss/vim-javascript'
"Plug 'Shougo/neocomplete.vim'
"Plug 'Yggdroot/indentLine'
"Plug 'nikvdp/ejs-syntax'
"Plug 'pangloss/vim-javascript', { 'for': 'javascript' }
"Plug 'statianzo/vim-jade'
"Plug 'othree/html5.vim'
"Plug 'etnadji/vim-epub'
"Plug 'python-mode/python-mode'
call plug#end()


colorscheme antares
let g:NERDTreeWinSize=50
let g:javascript_plugin_jsdoc = 1
let g:javascript_plugin_ngdoc = 1
let g:javascript_plugin_flow = 1
let g:jsx_ext_required = 0

set backupdir=~/.vim/backup/
set directory=~/.vim/swp/

set laststatus=2


set tabstop=2 shiftwidth=2 softtabstop=2 expandtab
set nowrap incsearch hlsearch splitbelow mouse=n
set autoindent copyindent number noesckeys
set wildmenu

let g:airline_solarized_bg='dark'
let g:airline_theme='wombat'
set t_Co=256
set background=dark

set ruler

" if (has("termguicolors"))
  " set termguicolors
" endif

if has('nvim')
  set autoindent
else
  set noesckeys
endif

"set wildignore=*.o,*~,*.pyc
"if has("win16") || has("win32")
  "set wildignore+=.git\*,.hg\*,.svn\*
"else
  "set wildignore+=*/.git/*,*/.hg/*,*/.svn/*,*/.DS_Store
"endif



" Ignore compiled files

"Always show current position

" Height of the command bar
"set cmdheight=2

" set noexpandtab
" set shiftround

let g:nerdtree_tabs_focus_on_files = 1
let g:nerdtree_tabs_startup_cd = 0
let g:nerdtree_tabs_autofind = 1

let g:tagbar_type_typescript = {                                                  
      \ 'ctagsbin' : 'tstags',                                                        
      \ 'ctagsargs' : '-f-',                                                           
      \ 'kinds': [                                                                     
      \ 'e:enums:0:1',                                                               
      \ 'f:function:0:1',                                                            
      \ 't:typealias:0:1',                                                           
      \ 'M:Module:0:1',                                                              
      \ 'I:import:0:1',                                                              
      \ 'i:interface:0:1',                                                           
      \ 'C:class:0:1',                                                               
      \ 'm:method:0:1',                                                              
      \ 'p:property:0:1',                                                            
      \ 'v:variable:0:1',                                                            
      \ 'c:const:0:1',                                                              
      \ ],                                                                            
      \ 'sort' : 0                                                                    
      \ }    


let g:NERDTreeWinPos = "right"
let NERDTreeShowHidden = 1
let g:NERDTreeQuitOnOpen = 1
let g:NERDTreeWinSize = 50
let g:acp_enableAtStartup = 1
let g:neocomplete#enable_at_startup = 1
let g:neocomplete#enable_smart_case = 1
let g:neocomplete#sources#syntax#min_keyword_length = 2

" Enable heavy omni completion.
if !exists('g:neocomplete#sources#omni#input_patterns')
  let g:neocomplete#sources#omni#input_patterns = {}
endif

"let g:neocomplete#enable_auto_select = 1

autocmd FileType css setlocal omnifunc=csscomplete#CompleteCSS
autocmd FileType html,markdown setlocal omnifunc=htmlcomplete#CompleteTags
autocmd FileType javascript setlocal omnifunc=javascriptcomplete#CompleteJS
autocmd FileType python setlocal omnifunc=pythoncomplete#Complete
autocmd FileType xml setlocal omnifunc=xmlcomplete#CompleteTags

"let g:user_emmet_expandabbr_key='<tab>'
"unmap ,start

let g:user_emmet_leader_key=','

au BufRead,BufNewFile *.vs,*.fs set filetype=glsl syntax=glsl
au BufRead,BufNewFile *.mst set filetype=html syntax=mustache

nmap ,tg :TagbarToggle<CR>
map <F8> :let mycurf=expand("<cfile>")<cr><c-w> w :execute("e ".mycurf)<cr><c-w>p
nmap ,edit :tabedit ~/.vimrc <cr>
nmap ,tg :TagbarToggle<cr>
" nmap ,so :so ~/.vimrc <cr>
nmap ,so :so ~/.vimrc <cr>
nmap ,ed :e % <cr>
nmap ,no :noh <cr>
nmap \e :edit % <cr>
" nmap ,ne :NERDTree <cr>
" nmap ,ne :NERDTreeTabsOpen <cr>
nmap ,ne :NERDTreeSteppedOpen <cr>
nmap ,nf :NERDTreeFind <cr>
" nmap ,nf :NERDTreeTabsFind <cr>
nmap ,install :w <bar> PlugInstall <cr>
nmap \mr :w <bar> !./start.sh<cr>
nmap ,install :w <bar> so ~/.vimrc <bar> PlugInstall <cr>
nmap <leader>k <Plug>(Man) 
nmap ,k <Plug>(Man) 

let g:ctrlp_custom_ignore = {
      \ 'dir':  '.git\|node_modules',
      \ 'file': '\v\.(exe|so|dll)$',
      \ 'link': 'some_bad_symbolic_links',
      \ }

function! MRun()
  let arguments = input('arguments: ')
  execute "!./start.sh " . arguments
endfunction

" nmap ,start :w <bar> call MRun() <cr>
nmap ,st :w <bar> !./start.sh <cr>
" nmap \mr :w <bar> call MRun() <cr>
nmap \mr :w <bar> !./start.sh <cr>

" CUSTOM TEMPLATE FUNCTION
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
imap ,l <c-r>=GetTemplate() <cr><esc>
" ==========================================================

" ALTERNATE FILE [,al]
" :e #
" ==========================================================
nmap ,al :e # <cr>
" ==========================================================

" EDIT LOCAL MAKEFILE [,ma]
" :e #
" ==========================================================
" ==========================================================
hi Search ctermfg=red ctermbg=none guibg=NONE guifg=yellow
hi IncSearch ctermbg=yellow ctermfg=black

au FileType man set syntax=c


au filetype vim syntax match VimRed /^\/\//
au filetype vim syntax match VimBlue /@search/
au filetype vim syntax match VimBlue /^@/
au filetype vim syntax match VimGreen /^one/
au filetype vim syntax match VimYellow /\word/

au filetype vim syntax match ValYellow /\word/
au filetype vim syntax match ValYellow /\list/

" digit
au filetype vim syntax match ValLightBlue /\d/
au filetype vim syntax match VimBrown /\<\item>/

" head
" syntax match ValYellow /\h/

au filetype vim hi ValRed ctermfg=red
au filetype vim hi ValBlue ctermfg=blue
au filetype vim hi ValGreen ctermfg=green
au filetype vim hi ValYellow ctermfg=yellow
au filetype vim hi ValBrown ctermfg=brown


hi NonText ctermfg=236
filetype plugin on

"au BufNewFile,BufRead *.ejs set syntax=html
"au BufEnter *.ejs echo 'entered'
"au FocusGained *.ejs :redraw
" g:vim_json_syntax_conceal = 0 

" set list
" set listchars=eol:⏎,space:·,tab:\ T,trail:→,extends:E,precedes:-,conceal:C,nbsp:X
" set listchars=
" set listchars+=eol:⏎
" set listchars+=trail:·
" set listchars+=space:·
"set listchars+=tab:TE
"set listchars+=extends:E
"set listchars+=precedes:B
"set conceallevel=2
" set listchars+=tab:\ X

" nmap ,se :call CustomNew() <cr>

" au BufEnter .* call CustomNew() <cr>
" au BufEnter,BufWritePost * call CustomNew() 
" au BufEnter,BufWritePost * call example#load()

" @what is that what this
" and @this is what
" one two
" two one

" autocmd bufwritepost .vimrc source ~/.vimrc
" call example#begin()

" inoremap <space><space> <esc>/<++><Enter>
"nmap <space><space> /<++><cr>zt:noh<cr>
" <++>
"nmap ,ma :tabe makefile <cr>
"map <c-g> :call GetTemplate() <cr>
"inoremap <c-l> <c-r>=GetTemplate() <cr>
"let g:javascript_plugin_jsdoc = 1
"let g:javascript_plugin_ngdoc = 1
"let g:javascript_plugin_flow = 1
" set nowrap incsearch hlsearch splitbelow backspace=2
" let g:elite_mode=1
"set ruler
