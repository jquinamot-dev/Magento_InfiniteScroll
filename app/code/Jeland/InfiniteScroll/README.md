

│ ├── module.xml
│ ├── adminhtml
│ │ └── system.xml
│ └── frontend
│ └── routes.xml (if needed)
├── registration.php
├── composer.json
├── view
│ └── frontend
│ ├── layout
│ │ └── catalog_category_view.xml
│ ├── templates
│ │ └── infinite_scroll.phtml
│ └── web
│ ├── js/infinite-scroll.js
│ └── css/infinite-scroll.css
```


## ⚙️ Installation


1. Copy the module into:
```
app/code/Jeland/InfiniteScroll
```


2. Run Magento setup commands:
```bash
bin/magento setup:upgrade
bin/magento setup:di:compile # if in production mode
bin/magento setup:static-content:deploy -f
bin/magento cache:flush
```


## 🧩 Admin Configuration
Go to:
```
Stores → Configuration → Catalog → Infinite Scroll → Enable Infinite Scroll
```
Set to **Yes** to activate module.


## 🔍 Requirements
- Magento 2.3+ (tested on 2.4.x)
- jQuery available on frontend


## 🚀 How It Works
- On PLP scroll near bottom, module finds the **next page URL** from pagination.
- Loads the next batch of products via AJAX.
- Extracts product HTML and appends to existing list.
- Displays loader while fetching.


> You may need to adjust the product container selectors depending on your theme.


## 🧪 Customization
Update selector for next page or product items in:
```
view/frontend/web/js/infinite-scroll.js
```
Or set custom selector via:
```html
data-next-page-selector=".pages .next a"
```


## ❗ Notes
- Works best with default Magento/Luma markup
- SEO & accessibility improvements (optional): history state push, auto-focus, lazy loading
- For JSON API or faster loading, consider GraphQL endpoint


## 📦 Future Enhancements
- Add "Load More" button option
- Add limit of auto-loads
- Support multiple loaders/themes


## 🧑 Author
Developed by **Jeland Roy Quinamot** for Magento 2 enhancement. You can freely extend or modify this module.


---


## 📄 License
This module is distributed under an open license. You may use and modify it.


```