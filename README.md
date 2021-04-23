# Javascript 1

## Thư mục: Snow - Hiệu ứng tuyết rơi
### snow.js
* Tạo các bông tuyết (createElement) và append vào body
* Với các thông số tự sinh ngẫu nhiên: kích thước, thời gian hiển thị, màu sắc, độ trong suốt
### style.css
* Chứa định dạng và hiệu ứng của bông tuyết
```css
  .fa-snowflake{
    position: absolute;
    top: -20px;
    animation: fall 7s linear forwards;
    color: #fff;
  }

  @keyframes fall{
    to {
        transform: translateY(100vh);
    }
  }
```
### Bông tuyết
* Sử dụng Font-Awesome
```html
  <i class="fas fa-snowflake"></i>
```
* CDN
```html
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
```
