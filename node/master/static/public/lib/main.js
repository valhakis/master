var container = document.createElement('div');
var menu = document.createElement('div');

container.style.backgroundColor = '#fff';

menu.style.border = '1px solid #000';
menu.style.padding = '10px';
container.style.margin = '3px';
container.style.position = 'fixed';
container.style.bottom = '0px';
container.style.left = '0px';

container.appendChild(menu);

document.body.appendChild(container);

AddLink('Home', '/static');

function AddLink(name, href)
{
  var link = document.createElement('a');
  link.style.textDecoration = 'none';
  link.style.color = '#000';
  link.style.display = 'inline-block';
  link.style.padding = '10px';
  link.style.backgroundColor = '#ccc';
  link.style.border = '1px solid rgba(0, 0, 0, 0.5)';

  link.href = href;
  link.innerText = name;
  menu.append(link);
}
