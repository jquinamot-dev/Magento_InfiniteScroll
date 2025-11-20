<?php
namespace Jeland\InfiniteScroll\Helper;


use Magento\Framework\App\Config\ScopeConfigInterface;
use Magento\Store\Model\ScopeInterface;


class Data
{
    const XML_PATH_ENABLED = 'catalog/infinite_scroll/enabled';


    private $scopeConfig;


    public function __construct(ScopeConfigInterface $scopeConfig)
    {
        $this->scopeConfig = $scopeConfig;
    }


    public function isEnabled($storeId = null)
    {
        return (bool) $this->scopeConfig->isSetFlag(self::XML_PATH_ENABLED, ScopeInterface::SCOPE_STORE, $storeId);
    }
}