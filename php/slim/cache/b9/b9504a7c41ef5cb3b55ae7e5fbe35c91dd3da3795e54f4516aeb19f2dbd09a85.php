<?php

/* index.html */
class __TwigTemplate_0618efd6b9ff33d0b7769701347056511524303a029ad9ffa8455c505a36ab3e extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<!DOCTYPE html>
<html lang=\"en\">
  <head>
    <meta charset=\"UTF-8\">
    <title>Slim</title>
  </head>
  <body>

    <p>Slim</p>

  </body>
</html>
";
    }

    public function getTemplateName()
    {
        return "index.html";
    }

    public function getDebugInfo()
    {
        return array (  19 => 1,);
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "index.html", "/home/viktor/master/php/slim/views/index.html");
    }
}
