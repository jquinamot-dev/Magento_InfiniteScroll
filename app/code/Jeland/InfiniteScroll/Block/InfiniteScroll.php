<?php
namespace Jeland\InfiniteScroll\Block;


use Magento\Framework\View\Element\Template;
use Jeland\InfiniteScroll\Helper\Data as HelperData;


class InfiniteScroll extends Template
{
    private $helper;


    public function __construct(Template\Context $context, HelperData $helper, array $data = [])
    {
        parent::__construct($context, $data);
        $this->helper = $helper;
    }


    public function isEnabled()
    {
        return $this->helper->isEnabled();
    }
}