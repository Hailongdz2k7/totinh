document.addEventListener('DOMContentLoaded', () => {
    const enterBtn = document.getElementById('enter-btn');
    const landingScreen = document.getElementById('landing');
    const mainContent = document.getElementById('main-content');
    const typeWriterText = document.getElementById('typewriter-text');

    // Nội dung bức thư
    const letterContent = `
    Chào bé yêu của anh,

    Nhân ngày Valentine 14/2, anh muốn gửi đến bé những lời yêu thương nhất. Cảm ơn bé đã luôn ở bên cạnh anh, chia sẻ cùng anh những niềm vui và nỗi buồn trong cuộc sống.

    Mỗi ngày trôi qua, anh càng thấy yêu bé nhiều hơn. Nụ cười của bé là động lực lớn nhất của anh. Anh hứa sẽ luôn nắm chặt tay bé, cùng bé đi qua mọi chặng đường phía trước.

    Chúc bé yêu của anh luôn xinh đẹp, hạnh phúc và cười thật nhiều nhé. Yêu bé nhiều lắm! ❤️

    Happy Valentine's Day!
    `;

    // Hiệu ứng chuyển màn hình
    enterBtn.addEventListener('click', () => {
        landingScreen.style.opacity = '0';
        setTimeout(() => {
            landingScreen.classList.remove('active');
            landingScreen.classList.add('hidden');

            mainContent.classList.remove('hidden');
            mainContent.classList.add('active');

            // Bắt đầu hiệu ứng gõ chữ và bắn tim
            startTypewriter();
            createHearts();
        }, 1000);
    });

    // Hiệu ứng gõ chữ (Typewriter effect)
    function startTypewriter() {
        let i = 0;
        const speed = 50; // Tốc độ gõ chữ

        function type() {
            if (i < letterContent.length) {
                // Xử lý xuống dòng
                if (letterContent.charAt(i) === '\n') {
                    typeWriterText.innerHTML += '<br>';
                } else {
                    typeWriterText.innerHTML += letterContent.charAt(i);
                }
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Hiệu ứng bắn tim 3D (3D Floating Hearts)
    function createHearts() {
        const container = document.createElement('div');
        container.classList.add('heart-container');
        document.body.appendChild(container);

        setInterval(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart-3d');

            // Random vị trí xuất phát theo chiều ngang
            heart.style.left = Math.random() * 100 + 'vw';

            // Random màu sắc (hồng đậm, hồng nhạt, đỏ)
            const colors = ['#ff4d6d', '#ff758f', '#c9184a', '#ffb3c1'];
            heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

            // Random kích thước và tốc độ
            const size = Math.random() * 10 + 10; // 10px to 20px base size
            heart.style.width = size + 'px';
            heart.style.height = size + 'px';

            const duration = Math.random() * 3 + 4; // 4s to 7s
            heart.style.animationDuration = `floatUp ${duration}s, heartBeat 1s infinite`;

            container.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, duration * 1000);
        }, 300);
    }
});
