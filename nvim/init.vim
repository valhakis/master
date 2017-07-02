call plug#begin('~/.vim/plugged')
Plug 'https://github.com/Haron-Prime/Antares'
Plug 'https://github.com/scrooloose/nerdtree'
Plug 'https://github.com/jiangmiao/auto-pairs'
Plug 'https://github.com/tpope/vim-surround'
"Plug 'https://github.com/jistr/vim-nerdtree-tabs'
Plug 'https://github.com/vim-syntastic/syntastic'
Plug 'https://github.com/tpope/vim-repeat'
Plug 'https://github.com/mattn/emmet-vim'
Plug 'https://github.com/Valloric/MatchTagAlways'
"Plug 'https://github.com/embear/vim-localvimrc'
"Plug 'https://github.com/Rip-Rip/clang_complete'
Plug 'https://github.com/pangloss/vim-javascript'
Plug 'https://github.com/Shougo/neocomplete.vim'
Plug 'https://github.com/nono/vim-handlebars'
"if has('nvim')
"Plug 'https://github.com/Shougo/deoplete.nvim'
"else
"endif
" Plug 'xolox/vim-misc'
" Plug 'xolox/vim-colorscheme-switcher'
"Plug 'flazz/vim-colorschemes'
"Plug 'mklabs/split-term.vim'
"Plug 'https://github.com/tikhomirov/vim-glsl'
" Plug 'junegunn/fzf', { 'dir': '~/.fzf', 'do': './install --all' }
" Plug 'https://github.com/kien/ctrlp.vim'
"Plug 'https://github.com/Yggdroot/indentLine'
"Plug 'https://github.com/vim-scripts/JavaScript-Indent'
"Plug 'https://github.com/svermeulen/vim-easyclip'
"Plug 'https://github.com/2072/PHP-Indenting-for-VIm/'
"Plug 'https://github.com/Rip-Rip/clang_complete'
"Plug 'https://github.com/sickill/vim-monokai'
"Plug 'https://github.com/briancollins/vim-jst'
"Plug 'https://github.com/mustache/vim-mustache-handlebars'
"Plug 'https://github.com/leafgarland/typescript-vim'
"Plug 'https://github.com/nikvdp/ejs-syntax'
"Plug 'https://github.com/tomasr/molokai'
"Plug 'https://github.com/StanAngeloff/php.vim'
"Plug 'https://github.com/evidens/vim-twig'
"Plug 'https://github.com/ekalinin/Dockerfile.vim'
"Plug 'https://github.com/cakebaker/scss-syntax.vim'
"Plug 'https://github.com/jwalton512/vim-blade'
"Plug 'https://github.com/jaxbot/syntastic-react'
"Plug 'https://github.com/mxw/vim-jsx'
"Plug 'https://github.com/embear/vim-localvimrc'
"Plug 'https://github.com/beyondmarc/opengl.vim'
"Plug 'christoomey/vim-tmux-navigator'
"Plug 'https://github.com/ekalinin/Dockerfile.vim'
"Plug 'https://github.com/NLKNguyen/vim-docker-compose-syntax'
"Plug 'https://github.com/erickzanardo/vim-xclip'
"Plug 'https://github.com/christoomey/vim-system-copy'
"Plug 'junegunn/vim-easy-align'
"Plug 'https://github.com/junegunn/vim-github-dashboard.git'
"Plug 'SirVer/ultisnips' | Plug 'honza/vim-snippets'
"Plug 'scrooloose/nerdtree', { 'on':  'NERDTreeToggle' }
"Plug 'tpope/vim-fireplace', { 'for': 'clojure' }
"Plug 'rdnetto/YCM-Generator', { 'branch': 'stable' }
"Plug 'fatih/vim-go', { 'tag': '*' }
"Plug 'nsf/gocode', { 'tag': 'v.20150303', 'rtp': 'vim' }
"Plug '~/my-prototype-plugin'
"Plug 'https://github.com/flazz/vim-colorschemes'
"Plug 'https://github.com/keith/tmux.vim'
"Plug 'https://github.com/Xuyuanp/nerdtree-git-plugin'
"Plug 'https://github.com/easymotion/vim-easymotion'
"Plug 'https://github.com/scrooloose/nerdcommenter'
"Plug 'https://github.com/burnettk/vim-angular'
"Plug 'https://github.com/ervandew/supertab'
"Plug 'https://github.com/airblade/vim-gitgutter'
"Plug 'https://github.com/vim-scripts/apachestyle'
"Plug 'https://github.com/othree/html5.vim'
"Plug 'davidosomething/syntastic-hbstidy'
"Plug 'https://github.com/tfnico/vim-gradle'
"Plug 'https://github.com/vim-scripts/groovy.vim'
"Plug 'https://github.com/digitaltoad/vim-pug'
"Plug 'https://github.com/ap/vim-css-color'
"Plug 'https://github.com/mustache/vim-mustache-handlebars'
"Plug 'https://github.com/rking/ag.vim'
call plug#end()

let base16colorspace=256  " Access colors present in 256 colorspace


set t_Co=256
syntax enable

set backupdir=~/master/.vim/backup/
set directory=~/master/.vim/swp/

set tabstop=2 shiftwidth=2 softtabstop=2 expandtab nowrap incsearch hlsearch splitbelow

set cursorline
hi clear CursorLine 
hi CursorLine ctermbg=235 guibg=#111111

"let g:deoplete#enable_at_startup = 1

let g:ctrlp_custom_ignore = '\.git\|node_modules\|bower_components\|laravel\/vendor'
let g:ctrlp_show_hidden = 1
let g:ctrlp_working_path_mode = 'a'
let g:user_emmet_leader_key=','

let g:nerdtree_tabs_open_on_console_startup=0
let g:NERDTreeWinPos = "right"
let g:NERDTreeWinSize = 25 
let NERDTreeMapActivateNode='<space>'
" let NERDTreeMinimalUI = 1
let NERDTreeDirArrows = 1
let NERDTreeShowHidden=1
" let g:NERDTreeDirArrowExpandable = '→'
" let g:NERDTreeDirArrowCollapsible = '↓'


" SYNTASTIC
"set statusline+=%#warningmsg#
"set statusline+=%{SyntasticStatuslineFlag()}
"set statusline+=%*

"let g:syntastic_javascript_checkers = ['jshint']
"let g:syntastic_typescript_checkers = ['tslint']
"let g:syntastic_typescript_tsc_fname = ''
"let g:syntastic_typescript_tslint_exec = '/usr/bin/env tslint'

"let g:syntastic_typescript_tsc_fname = ''
"let g:syntastic_javascript_jsxhint_exec = 'jsx-jshint-wrapper'

let g:syntastic_always_populate_loc_list = 1
let g:syntastic_auto_loc_list = 1
let g:syntastic_check_on_open = 1
let g:syntastic_check_on_wq = 0

let g:syntastic_c_config_file = $HOME . '/master/nvim/.syntastic'
" let g:syntastic_cpp_config_file = $HOME . '/master/nvim/syntastic_c_config.txt'
" let g:syntastic_cpp_config_file = $HOME . '/master/nvim/syntastic.conf'

"let g:syntastic_eruby_ruby_quiet_messages = {'regex': 'possibly useless use of a variable in void context'}

let g:syntastic_html_tidy_ignore_errors=[ 
      \ " proprietary attribute \"ng-", 
      \ " proprietary attribute", 
      \ " proprietary attribute \"app-", 
      \ "<app", "<\/app",
      \ 'trimming empty <',
      \ 'missing <li>',
      \ '<a> escaping malformed URI reference',
      \ '<img> lacks "alt" attribute',
      \ "<script> isn't allowed in <tbody> elements", 
      \ '<button> attribute name "@click"',
      \ 'is not recognized', 'discarding unexpected'
      \ ]

let g:syntastic_handlebars_hbstidy_ignore_errors=[ 
      \ " proprietary attribute \"ng-", 
      \ " proprietary attribute", 
      \ " proprietary attribute \"app-", 
      \ "<script> isn't allowed in <tbody> elements", 
      \ '<a> escaping malformed URI reference',
      \ "<app", "<\/app",
      \ 'missing <li>',
      \ 'trimming empty <',
      \ 'is not recognized', 'discarding unexpected'
      \ ]
let g:syntastic_filetype_map = {'html.handlebars': 'handlebars'}
let g:syntastic_handlebars_checkers  = ['handlebars', 'hbstidy']

" let g:syntastic_c_compiler = 'i686-w64-mingw32-gcc'
"let g:syntastic_cpp_compiler = 'i686-w64-mingw32-g++'
"let g:syntastic_cpp_compiler = '/usr/bin/i686-w64-mingw32-g++'
"let g:syntastic_cpp_compiler = 'g++'

if has('nvim')
  au filetype c,cpp map \mr :w \| Term make && make run <cr>
  au filetype sh map \mr :w \| Term ./% <cr>
else
  au filetype c,cpp map \mr :w \| !make && make run <cr>
  au filetype sh map \mr :w \| !./% <cr>
  au filetype ruby map \mr :w \| !ruby -w %<cr>
endif


" set mouse=n

"let g:indentLine_enabled = 1

" NEOCOMPLETE
let g:neocomplete#enable_at_startup = 1
autocmd FileType javascript setlocal omnifunc=javascriptcomplete#CompleteJS
" NEOCOMPLETE END

au BufRead,BufNewFile *.vs,*.fs set filetype=glsl syntax=glsl
au BufRead,BufNewFile *.mu set filetype=html.mustache syntax=html.mustache
au BufRead,BufNewFile *.ejs set filetype=jst syntax=jst
au BufRead,BufNewFile .jshintrc set filetype=json syntax=json
au BufRead,BufNewFile app,node set filetype=javascript syntax=javascript
au BufRead,BufNewFile .babelrc set filetype=json syntax=json
au BufRead,BufNewFile .env set filetype=json syntax=json
au BufRead,BufNewFile .env.template set filetype=json syntax=json
au BufRead,BufNewFile .eslintrc set filetype=json syntax=json
au BufRead,BufNewFile .bowerrc set filetype=json syntax=json
au BufRead,BufNewFile .ember-cli set filetype=json syntax=json

"au filetype cpp map \mr :w \| !make && ./app <cr>

" au filetype javascript nmap \mr :w \| !node % <cr>

"let g:syntastic_cpp_compiler = 'g++'
"let g:syntastic_cpp_compiler = 'g++'
"let g:syntastic_cpp_compiler = 'i686-w64-mingw32-g+'

function! InsertIfEmpty(file)
  echo a:file
  if @% == ""
    " no filename for current buffer
    " startinsert
    execute "0r" . a:file
  elseif filereadable(@%) == 0
    " file does not exist yet
    " startinsert
    execute "0r" . a:file
  elseif line('$') == 1 && col('$') == 1
    " file is empty
    " startinsert
    execute "0r" . a:file
  endif
endfunction

"au VimEnter main.c call InsertIfEmpty('~/master/nvim/skeletons/main.c')

autocmd VimEnter,BufRead,TabEnter,BufNewFile bs-config.js silent! call InsertIfEmpty('~/master/nvim/skeletons/bs-config.js')
autocmd VimEnter,BufRead,TabEnter,BufNewFile .jshintrc silent! call InsertIfEmpty('~/master/nvim/skeletons/.jshintrc')
autocmd VimEnter,BufRead,TabEnter,BufNewFile webpack.config.js silent! call InsertIfEmpty('~/master/nvim/skeletons/webpack.config.js')
autocmd VimEnter,BufRead,TabEnter,BufNewFile gulpfile.js silent! call InsertIfEmpty('~/master/nvim/skeletons/gulpfile.js') 
autocmd VimEnter,BufRead,TabEnter,BufNewFile Gruntfile.js silent! call InsertIfEmpty('~/master/nvim/skeletons/Gruntfile.js') 
autocmd VimEnter,BufRead,TabEnter,BufNewFile nodemon.json silent! call InsertIfEmpty('~/master/nvim/skeletons/nodemon.json') 
autocmd VimEnter,BufRead,TabEnter,BufNewFile main.c silent! call InsertIfEmpty('~/master/nvim/skeletons/main.c') 
autocmd VimEnter,BufRead,TabEnter,BufNewFile .babelrc silent! call InsertIfEmpty('~/master/nvim/skeletons/.babelrc')
autocmd VimEnter,BufRead,TabEnter,BufNewFile makefile silent! call InsertIfEmpty('~/master/nvim/skeletons/makefile')
autocmd VimEnter,BufRead,TabEnter,BufNewFile default.vs silent! call InsertIfEmpty('~/master/nvim/skeletons/default.vs')
autocmd VimEnter,BufRead,TabEnter,BufNewFile default.fs silent! call InsertIfEmpty('~/master/nvim/skeletons/default.fs')

"autocmd BufNewFile bs-config.js 0r ~/master/nvim/skeletons/bs-config.js
"autocmd BufNewFile .jshintrc 0r ~/master/nvim/skeletons/.jshintrc
"autocmd BufNewFile webpack.config.js 0r ~/master/nvim/skeletons/webpack.config.js
"autocmd BufNewFile gulpfile.js 0r ~/master/nvim/skeletons/gulpfile.js
"autocmd BufNewFile Gruntfile.js 0r ~/master/nvim/skeletons/Gruntfile.js
"autocmd BufNewFile nodemon.json 0r ~/master/nvim/skeletons/nodemon.json
"autocmd BufNewFile main.c 0r ~/master/nvim/skeletons/main.c
"autocmd BufNewFile .babelrc 0r ~/master/nvim/skeletons/.babelrc

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
  else
    echo result . ' does not exist'
  endif
  return ''
endfunction
"map <c-g> :call GetTemplate() <cr>
"inoremap <c-l> <c-r>=GetTemplate() <cr>
imap ,l <c-r>=GetTemplate() <cr>
" ==========================================================

" if executable('xsel')
" let s:copy['+'] = 'xsel'
" let s:paste['+'] = 'xsel'
" let s:copy['*'] = s:copy['+']
" let s:paste['*'] = s:paste['+']
" let s:cache_enabled = 0
" endif

" map ,run :w \| !make && curl kodu.noip.me:3000/restart <cr>
map ,run :w \| !make run <cr>
map ,kill :w \| !curl kodu.noip.me:3000/kill <cr>
nmap ,edit :tabedit ~/.config/nvim/init.vim <cr>
nmap ,tmux :tabedit ~/.tmux.conf <cr>
nmap ,bash :tabedit ~/.bashrc <cr>
au VimEnter,FileType vim,.vimrc,.lvimrc nmap ,so :w \| so % <cr>
au VimEnter,FileType c,cpp,*.c,*.cpp nmap ,so :e % <cr>
nmap qq :q <cr>
nmap ,install :w \| so % \| PlugInstall <cr>
nmap ,clean :w \| so % \| PlugClean <cr>
map ,wrap :set wrap! <cr>
map <F2> :set wrap! <cr>
imap \ne <c-o>:NERDTreeFind <cr>
nmap \ne :NERDTreeFind <cr>
nmap <F3> :NERDTree <cr>
nmap ,ne :NERDTreeFind <cr>
nmap ,make :w \| !make <cr>

"let g:localvimrc_ask = 1
"let g:localvimrc_sandbox = 0
"let g:localvimrc_persistent = 2

" CHECK IF FILE EXISTS
" ==========================================================
"function! FileExists(fname)
"if (filereadable(a:fname))
" echo "file is '" . a:fname . "' readable"
"else
"echo "file is '" . a:fname . "' not readable"
"endif
"endfunction
" ==========================================================

"let g:js_indent_log = 0
"colorscheme monokai
"colorscheme badwolf
"colorscheme 0x7A69_dark

" HIGHLIGHT
" ===================================================================================


"colorscheme molokai
"colorscheme monokai
if has('nvim')
  " colorscheme monokai
else
  "colorscheme monokai
endif
" antares, babymate256, birds-of-paradise, brogrammer
colorscheme antares

set background=dark
"hi comment ctermfg=red guibg=#ff0000
hi Search ctermfg=red ctermbg=none
hi Todo guifg=red ctermfg=red
hi Visual ctermbg=160
hi Pmenu ctermfg=160 ctermbg=none
if has('nvim')
  hi PmenuSel ctermfg=red
  hi Visual guibg=#222222 guifg=none
  set termguicolors
  hi Pmenu guibg=#111111 guifg=#FFFFFF
  hi PmenuSel guibg=#222222 guifg=#FFCCCC
endif
highlight Comment ctermfg=red
hi TabLine guifg=#ffffff guibg=#333333
hi Search guibg=#111111 guifg=#ff2222

" highlight link SyntasticErrorSign SignColumn
" highlight link SyntasticWarningSign SignColumn
" highlight link SyntasticStyleErrorSign SignColumn
" highlight link SyntasticStyleWarningSign SignColumn


"hi nonText ctermbg=none
"hi normal ctermbg=0 guibg=#FFFF



"if has('nvim')
"else
"let g:neocomplete#enable_at_startup = 1
"Note: This option must be set in .vimrc(_vimrc).  NOT IN .gvimrc(_gvimrc)!
" Disable AutoComplPop.
"let g:acp_enableAtStartup = 0
" Use neocomplete.
" Use smartcase.
" let g:neocomplete#enable_smart_case = 1
" Set minimum syntax keyword length.
" let g:neocomplete#sources#syntax#min_keyword_length = 3

" Define dictionary.
" let g:neocomplete#sources#dictionary#dictionaries = {
" \ 'default' : '',
" \ 'vimshell' : $HOME.'/.vimshell_hist',
" \ 'scheme' : $HOME.'/.gosh_completions'
" \ }

" Define keyword.
" if !exists('g:neocomplete#keyword_patterns')
" let g:neocomplete#keyword_patterns = {}
" endif
" let g:neocomplete#keyword_patterns['default'] = '\h\w*'

" Plugin key-mappings.
" inoremap <expr><C-g>     neocomplete#undo_completion()
" inoremap <expr><C-l>     neocomplete#complete_common_string()

" Recommended key-mappings.
" <CR>: close popup and save indent.
" inoremap <silent> <CR> <C-r>=<SID>my_cr_function()<CR>
" function! s:my_cr_function()
" return (pumvisible() ? "\<C-y>" : "" ) . "\<CR>"
" For no inserting <CR> key.
"return pumvisible() ? "\<C-y>" : "\<CR>"
" endfunction
" <TAB>: completion.
" inoremap <expr><TAB>  pumvisible() ? "\<C-n>" : "\<TAB>"
" <C-h>, <BS>: close popup and delete backword char.
" inoremap <expr><C-h> neocomplete#smart_close_popup()."\<C-h>"
" inoremap <expr><BS> neocomplete#smart_close_popup()."\<C-h>"
" Close popup by <Space>.
"inoremap <expr><Space> pumvisible() ? "\<C-y>" : "\<Space>"

" AutoComplPop like behavior.
"let g:neocomplete#enable_auto_select = 1

" Shell like behavior(not recommended).
"set completeopt+=longest
"let g:neocomplete#enable_auto_select = 1
"let g:neocomplete#disable_auto_complete = 1
"inoremap <expr><TAB>  pumvisible() ? "\<Down>" : "\<C-x>\<C-u>"

" Enable omni completion.
" autocmd FileType css setlocal omnifunc=csscomplete#CompleteCSS
" autocmd FileType html,markdown setlocal omnifunc=htmlcomplete#CompleteTags
" autocmd FileType python setlocal omnifunc=pythoncomplete#Complete
" autocmd FileType xml setlocal omnifunc=xmlcomplete#CompleteTags

" Enable heavy omni completion.
" if !exists('g:neocomplete#sources#omni#input_patterns')
" let g:neocomplete#sources#omni#input_patterns = {}
" endif
"let g:neocomplete#sources#omni#input_patterns.php = '[^. \t]->\h\w*\|\h\w*::'
"let g:neocomplete#sources#omni#input_patterns.c = '[^.[:digit:] *\t]\%(\.\|->\)'
"let g:neocomplete#sources#omni#input_patterns.cpp = '[^.[:digit:] *\t]\%(\.\|->\)\|\h\w*::'

" For perlomni.vim setting.
" https://github.com/c9s/perlomni.vim
" let g:neocomplete#sources#omni#input_patterns.perl = '\h\w*->\h\w*\|\h\w*::'

" let g:neocomplete#enable_at_startup = 1
"endif

" nmap ,n :echo "hello"<cr>
" nmap ,nn :NextColorScheme<cr>
" nmap ,nb :PrevColorScheme<cr>
" let g:colorscheme_switcher_exclude = ['billw', 'biogoo', '1989', '256-grayvim', '256-jungle', '0x7A69_dark''default', 'test', 'abra', 'adam', 'adobe', 'af', 'anderson', 'anotherdark', 'anasi_blows', 'astronaut', 'asu1dark', '256', '3dglasses', 'abbott']

"au filetype qf setlocal wrap
"au filetype qf setlocal syntax=c

"set completeopt+=preview

"autocmd WinEnter * if &previewwindow | set filetype=c wrap  | endif

" set statusline=%y\ %f\ %l\\%L
" set statusline=%#LineNR#
" set statusline=%m
" set statusline+=\ %y
" set statusline+=%=[%l/%L]
" set statusline+=\ [%f]
"
"set path=.,/usr/include,,~/include,

"nmap <c-f> :set statusline=[%F] <cr>

" let $FZF_DEFAULT_COMMAND = 'ag --hidden --ignore .git -l -g ""'
