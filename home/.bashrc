alias ls="ls --color "

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color'
PS1='[\u@\h \W]\$ '

alias svim="sudo -E vim "
alias so="source ~/.bashrc"
alias tree="tree -C"
alias so="source ~/.bashrc"

function make_ps1()
{
  local YELLOW="\[$(tput setaf 3)\]"
  local RESET="\[$(tput sgr0)\]"
  local RED="\[$(tput setaf 9)\]"
  local RED2="\[$(tput setaf 1)\]"
  local RED3="\[$(tput setaf 19)\]"
  local BLUE="\[$(tput setaf 4)\]"
  local WHITE="\[$(tput setaf 195)\]"
  local BLUE2="\[$(tput setaf 12)\]"
  local YELLOW2="\[$(tput setaf 11)\]"
  local YELLOW3="\[$(tput setaf 190)\]"

  local UNAME="${BLUE2}\u${RESET}"
  local HOST="${YELLOW2}\h${RESET}"
  local CDIR="${RED}\W${RESET}"
  local PATH="${YELLOW3}\w${RESET}"
  export PS1="${YELLOW}[${RESET} ${UNAME}@${HOST} | ${PATH} ${YELLOW}]${RESET}\n> ${RESET}"
}
make_ps1

export PATH=$PATH:"$HOME/include"
export C_INCLUDE_PATH=$C_INCLUDE_PATH:"$HOME/include"
export CPLUS_INCLUDE_PATH=$CPLUS_INCLUDE_PATH:"$HOME/include"
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:"$HOME/lib"
export LIBRARY_PATH=$LIBRARY_PATH:"$HOME/lib"

[ -f ~/.fzf.bash ] && source ~/.fzf.bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

export FZF_DEFAULT_COMMAND='ag -l -g ""'
