document.addEventListener("DOMContentLoaded", () => {
  var cityData = {
    "Hà Nội": ["Ba Đình", "Hoàn Kiếm", "Tây Hồ", "Long Biên"],
    "TP Hồ Chí Minh": ["Quận 1", "Quận 2", "Quận 3", "Quận 4"],
    "Đà Nẵng": [
      "Hải Châu",
      "Thanh Khê",
      "Sơn Trà",
      "Ngũ Hành Sơn",
      "Liên Chiểu",
    ],
    "Cần Thơ": ["Ninh Kiều", "Bình Thủy", "Cái Răng", "Ô Môn"],
    'Huế': ["Phú Hội", "Phú Nhuận", "Phú Hải", "Phú Bình"],
    "Nha Trang": ["Vĩnh Hải", "Vĩnh Phước", "Vĩnh Thọ", "Vĩnh Nguyên"],
    "Đà Lạt": ["Phường 1", "Phường 2", "Phường 3", "Phường 4"],
    "Hải Phòng": ["Hồng Bàng", "Lê Chân", "Ngô Quyền", "Kiến An"],
    "Quảng Ninh": ["Hạ Long", "Cẩm Phả", "Uông Bí", "Móng Cái"],
    "Phú Quốc": ["Dương Đông", "An Thới", "Cửa Cạn"],
  };

  var citySelect = document.getElementById("city");
  var districtSelect = document.getElementById("district");
  citySelect.appendChild(new Option("Chọn tỉnh/thành phố", ""));
  for (var city in cityData) {
    var option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    citySelect.appendChild(option);
  }

  citySelect.addEventListener("change", () => {
    districtSelect.innerHTML = "";
    var districts = cityData[citySelect.value];
    if (districts) {
      districts.forEach((district) => {
        districtSelect.appendChild(new Option(district, district));
      });
    }
  });

  document
    .getElementById("registrationForm")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      var phone = document.getElementById("phone").value;
      var email = document.getElementById("email").value;
      var city = citySelect.value;
      var district = districtSelect.value;

      var result =
        "Số điện thoại: " +
        phone + "<br>" +
        "<br>Email: " +
        email + "<br>" +
        "<br>Tỉnh/Thành phố: " +
        city + "<br>" +
        "<br>Quận/Huyện: " +
        district;
      document.getElementById("result").innerHTML = result;
      document.getElementById("result").style.display = 'block'; 
    });
  citySelect.dispatchEvent(new Event("change"));
});
document.getElementById('phone').addEventListener('input', function (e) {
    this.value = this.value.replace(/[^0-9]/g, '');
});
