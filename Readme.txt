Tạo migrations:
- https://sequelize.org/v7/manual/query-interface.html
Đọc cái link này để viết được migrations:
- https://sequelize.org/v7/manual/migrations.html
Tạo model (model:generation):
- Tạo xong phải chỉnh lại 1 tí như file models/posts, dùng cho tiện
Chú ý:
- Khi dev ở local, tạo db ở mysql thì phải dùng lệnh sau để lưu được tiếng Việt
CREATE DATABASE YES_1 character set UTF8 collate utf8_vietnamese_ci;