<?php
/**
 * Magento
 *
 * @author    Meigeeteam http://www.meaigeeteam.com <nick@meaigeeteam.com>
 * @copyright Copyright (C) 2010 - 2012 Meigeeteam
 *
 */
class Meigee_Meigeewidgets_Block_Featuredcategory
extends Mage_Catalog_Block_Product_List
implements Mage_Widget_Block_Interface
{
    protected $products;

    protected function _construct() {
        parent::_construct();
    }

    protected function catId()
    {
        $cat = explode("/", $this->getData('featured_category'));     
        return $cat[1];
    }
    public function catName () {
        return Mage::getModel('catalog/category')->load($this->catId());
    }

    public function productsAmount () {
        return $this->getData('products_amount');
    }

    /*public function getColumnCount () {
        return $this->getData('column_count');
    }*/

    public function getMyCollection () {
		$this->products = Mage::getResourceModel('catalog/product_collection')
			->addAttributeToSelect(array('name', 'price', 'small_image', 'short_description'), 'inner')
			->addAttributeToSelect('news_from_date')
			->addAttributeToSelect('news_to_date')
			->addAttributeToSelect('special_price')
			->addAttributeToSelect('status')
			->addAttributeToFilter('visibility', array(2, 3, 4))
			->addAttributeToSelect('*')
			->addCategoryFilter(Mage::getModel('catalog/category')->load($this->catId()));
		return $this->products;
	}

    public function getSliderOptions () {
        
        if ($this->getData('template') == 'meigee/meigeewidgets/slider.phtml') {
            $options =', speed:'.$this->getData('slider_speed').','
            .'displaySlideQty:'.$this->getData('slider_displayslideqty').','
            .'moveSlideQty:'.$this->getData('slider_moveslideqty').','
            .'easing:'.'"'.$this->getData('slider_easing').'"';
        }
        return $options;
    }
}