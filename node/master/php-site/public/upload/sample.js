$('.add').click(function() {
  $('.block:last').before(' <div class="block" id="block"><div class="widget-content nopadding"><div class="control-group"><label class="control-label">Nome do produto</label><div class="controls"><input type="text" maxlength="140" name="supplierproduct1" id="supplierproduct1">  <span class="remove btn btn-danger"> Excluir </span>  </div></div></div></div>');
});
$('.optionBox').on('click','.remove',function() {
  $("#block").remove();
});

