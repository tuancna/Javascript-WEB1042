//Tuyết rơi
createSnowflake();
setInterval(createSnowflake, 100);

function createSnowflake(){
    //Tạo element bông tuyết từ font-awesome
    const snow_flake = document.createElement('i');
    snow_flake.classList.add('fas');
    snow_flake.classList.add('fa-snowflake');

    //Vị trí xuất hiện ngẫu nhiên
    snow_flake.style.left = Math.random() * (window.innerWidth - 30) + 'px';

    //Thời gian hiển thị hiệu ứng ngẫu nhiên
    snow_flake.style.animationDuration = Math.random() * 3;

    //Độ trong suốt
    snow_flake.style.opacity = Math.random();

    //Kích thước
    snow_flake.style.fontSize = Math.random() * 10 + 10 + 'px';
    snow_flake.style.color = '#' + Math.random();

    //Thêm element vào body
    document.body.appendChild(snow_flake);

    //Xóa element
    setTimeout(() => {
        snow_flake.remove();
    },  7000);
}