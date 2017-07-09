call plug#begin('~/.vim/plugged')
Plug 'Haron-Prime/Antares'
Plug 'scrooloose/nerdtree' 
Plug 'tpope/vim-surround'
Plug 'tpope/vim-repeat'
Plug 'mattn/emmet-vim'
Plug 'pangloss/vim-javascript'
call plug#end()

colorscheme antares

set backupdir=~/.vim/backup/
set directory=~/.vim/swp/

set tabstop=2 shiftwidth=2 softtabstop=2 expandtab
set nowrap incsearch hlsearch splitbelow

let g:NERDTreeWinPos = "right"
let NERDTreeShowHidden = 1
let g:NERDTreeQuitOnOpen = 1

"let g:user_emmet_expandabbr_key='<tab>'
let g:user_emmet_leader_key=','

au BufRead,BufNewFile app set filetype=javascript syntax=javascript

nmap ,edit :tabedit ~/.vimrc <cr>
nmap ,so :so ~/.vimrc <cr>
nmap ,ne :NERDTree <cr>
nmap ,nf :NERDTreeFind <cr>
