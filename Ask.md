```bash
<div className="logo" style={{ color: "white", textAlign: "center" }}>
  {" "}
Viet Anh le{" "}
  </div>
```

Tại sao lại có hai cái kia?

2. Không tách được thằng sidebar riêng ra.
3. Không chuyển trang khi bấm vào trang profile - avatar được.

---

4.30:

1. Lỗi khi selectedRows

a. khi bấm vào seleted all --> nó vẫn show ra các item đã bị xóa hiển thị undefined

--- khi xóa vào trong user list thì vẫn phải giữ nguyên khi refresh

--- save theo user name

2. Lỗi khi xóa 2 thằng ??? (redux)
3. thi thoảng nó hiện có 1 thằng ??

---

05.02

1. tại sao phải parse 2 lần để lấy data?
   react-ant-dashboard/src/Views/Pages/Login/Login.js
2. Call thẻ p khi lỗi match data
