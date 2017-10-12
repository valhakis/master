<?php

/* index.twig */
class __TwigTemplate_38ceeda31bef967172017985c59cbc3bda1abcd32a210dfbc4c81ede5ca4599f extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 4
        $this->parent = $this->loadTemplate("layout.html", "index.twig", 4);
        $this->blocks = array(
            'body' => array($this, 'block_body'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "layout.html";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 6
    public function block_body($context, array $blocks = array())
    {
        // line 7
        echo "<p>THIS IS THE BODY</p>

<p>Welcome, ";
        // line 9
        echo twig_escape_filter($this->env, ($context["name"] ?? null), "html", null, true);
        echo "!</p>

";
    }

    public function getTemplateName()
    {
        return "index.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  35 => 9,  31 => 7,  28 => 6,  11 => 4,);
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "index.twig", "/home/viktor/master/php/slim/views/index.twig");
    }
}
