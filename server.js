const express = require('express');
const app = express();
const port = 3000;

// ข้อมูล
const news = [
  { id: 1, title: "Tech Innovation", category: "Technology",},
  { id: 2, title: "Local News: Mayor Announces New Infrastructure Plan", category: "Local"},
  { id: 3, title: "National Football Championship Results", category: "Sports" },
  { id: 4, title: "Health News: New Vaccine Approved", category: "Health"},
  { id: 5, title: "New Smartphone Launches", category: "Technology"},
  { id: 6, title: "Upcoming Movie Releases", category: "Entertainment"},
  { id: 7, title: "Stock Market Hits New High", category: "Business" },
  { id: 8, title: "Peace Talks in Conflict Zone", category: "World" },
  { id: 9, title: "Discovery in Space Exploration", category: "Science"},
  { id: 10, title: "New Curriculum Introduced in Schools", category: "Education"}
];

// สร้างเส้นทาง GET ที่ /news/:category เพื่อดึงข้อมูลข่าวตาม category
app.get('/news/:category', (req, res) => {
  const category = req.params.category;  // ดึง category จาก URL
  const filteredNews = news.filter(n => n.category.toLowerCase() === category.toLowerCase());  // กรองข่าวที่มี category ตรงกับที่ระบุ

  if (filteredNews.length > 0) {
    res.json(filteredNews);  // ส่งข้อมูลข่าวที่ตรงกับ category
  } else {
    res.status(404).json({ message: "No news found in this category" });  // หากไม่พบข่าวใน category ที่ระบุ
  }
})
// เริ่มต้นเซิร์ฟเวอร์
app.listen(3000, () => {
  console.log('Server is running on 3000');
});