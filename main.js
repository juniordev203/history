
document.getElementById("feedback-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const feedback = e.target.feedback.value;

    if (feedback.trim()) {
        alert("Cảm ơn bạn đã gửi phản hồi!");
        e.target.reset(); // Xóa nội dung form sau khi gửi
    } else {
        alert("Vui lòng nhập ý kiến của bạn.");
    }
});