// Event Listener - tương tự DOM event nhưng nó có những lúc tiện lợi hơn nên cần biết cả 2 
// var btn = document.getElementById('btn')
// console.log(btn)

// btn.onclick = function(){
//     // Giải quyết cả 3 việc cùng một lúc 
//     console.log('Viẹc 1');
//     console.log('Viec 2');
//     alert('Viec 3')
// }

// setTimeout (function(){
//     btn.onclick = function(){
        
//     }
   
// }, 3000)

// Event Listener 
// var viec1 = function(e) {
//     console.log(Math.random());
// }
// btn.addEventListener('click', viec1)

// setTimeout (function(){
//     btn.removeEventListener('click', viec1)
// }, 3000)

// Sử dụng DOM event khi ta muốn lắng nghe sự kiện mà ko muốn gỡ bỏ nó đi
// Sử dụng EventListener hữu ích khi 1 sự kiện diễn ra nhưng muốn huỷ bỏ lắng nghe sự kiện đó trong 1 trường hợp cụ thể nào đó - đặc biệt hữu hiệu khi bạn có nhiều listener

// Khi làm việc frontend thì luôn nhận đc dãy JSON từ backend, và từ đó parse ra kiểu dữ liệu trong JavaScript để hiển thị lên website

// var json = '{"name":"tieuanh","email": "tieuanh@gmail.com"}';
// console.log(JSON.stringify({
//     name: 'Tieu Anh',
//     age: 18,
//     test: function() {
//         console.log(age)
//     }

// }))
// --Promise
// -- Sync: đồng bộ 
// -- Async: bất đồng bộ 
// Các hàm bất đồng bộ: setTimeout, setInterval, fetch, XMLHttpRequest, file reading, request animation frame


// Callback hell => Promise để gọn gàng hơn
// setTimeout(function() {
//     console.log(1); //việc 1 
//     setTimeout(function() {
//         console.log(2); //việc 2
//         setTimeout(function() {
//             console.log(3); //việc 3
            
//         }, 1000)
        
//     }, 1000)
// }, 1000)


// --Lý thuyết, cách hoạt động
// - Promise là gì? 
//Tạo ra 1 Promise 
// 1. Pending (trạng thái Promise) -- bị memory leak
// 2. Fullfil -- thành công
// 3. Reject -- thất bại
// var promise1 = new Promise(
//     function(resolve){
//         setTimeout(function() {
//             resolve([1,2])
//         }, 2000)
//     }
// )

// var promise2 = new Promise(
//     function(resolve){
//         setTimeout(function() {
//             resolve([3,4])
//         }, 5000)
//     }
// )

// Promise.all([promise1, promise2])
//     .then(function([result1, result2]){
//         console.log(result1.concat(result2))
//     });

// Trả lời khi phỏng vấn
// Lý thuyết 
// Promise là 1 khái niệm sinh ra để xử lý những thao tác bất đồng bộ, trc khi có Promise sử dụng callback hell => code rối rắm, khó hiểu
// Để taọ ra 1 Promise 
// Tính chất của Promise -- tính chất theo chuỗi từng then một, kết quả trả về của function đằng trước chính là kết quả của function đằng sau => giải quyết vấn đề callback hell


//Thực hành Promise
// frontend: nhìn vào giao diện thôi
//backend: phân tích làm thế nào để lưu vào cơ sở dữ liệu, bóc tách dữ liệu như thế nào để lưu cho hợp lý

// var users = [
//     {
//         id: 1,
//         name: 'Kien Dam'
//     }, 

//     {
//         id: 2,
//         name: 'Son Dang'
//     }, 

//     {
//         id: 3,
//         name: 'Hai Nam'
//     }

// ];

// var comments = [
//     {
//         id: 1,
//         user_id: 1,
//         content: 'Anh Son chua ra video :('
//     }, 

//     {
//         id: 2,
//         user_id: 2,
//         content: 'Vua ra xong em oi!'
//     },

//     {
//         id: 3,
//         user_id: 3,
//         content: 'Cam ơn anh ^^!'
//     }
// ]

//Làm thể nào để backend lấy ra dữ liệu
//Backend trả về 2 url - thể hiện 2 API  
//API 1 là để lấy được nội dung comment
//API 2 là để lấy được user 

//1. Gọi lên API để lấy comment 
//2. Từ comment lấy ra user_id 
//3. Từ user_id lấy ra user tương ứng

//Fake API -- mô phỏng 1 hàm để thực hiện gọi qua url backend trả về để lấy dữ liệu

//hành động lấy đc dữ liệu qua API là xử lý bất đồng bộ
// function getComments(){
//     return new Promise(function(resolve){
//         setTimeout(function() {
//             resolve(comments)
//         }, 1000);
//     })
// }

// function getUsers(userIds){
//     return new Promise(function(resolve){
//         var result = users.filter(function(user){
//             return userIds.includes(user.id)
//         })
//         setTimeout(function(){
//             resolve(result)
//         }, 1000);
//     })

// }

//Promise Hell

// getComments()
//     .then(function(comments){
//         var userIds = comments.map(function(comment){
//             return comment.user_id;
//         })

//         return getUsers(userIds)
//             .then(function(users){
//                 return {
//                     users: users,
//                     comments: comments,
//                 }
//             });


    // })
    // .then(function(data){
    //     var comment_block = document.getElementById('comment-block')

    //     var html = '';

    //     data.comments.forEach(function(comment){
    //         var user = data.users.find(function(user){
    //             return user.id === comment.user_id
    //         });
    //         html += `<li>${user.name}: ${comment.content} </li>`

    //     });
    //     comment_block.innerHTML = html
    // })

// getUsers([1, 2])
//     .then(function(users){
//         console.log(users);
//     });

//Async / Await : giải quyết vấn đề lồng nhau, viết từ trên xuống dưới


// Bài tiếp: Fetch: sử dụng để lấy được dữ liệu từ phía bạckend trả về

//1. Frontend: xây dựng giao diện người dùng, xử lý logic giao diện

//2. Backend: xây dựng logic xử lý + cơ sở dữ liệu (nơi lưu trữ tất cả dữ liệu của website), mở ra API để mình giao tiếp 

//Fetch: gọi API để lấy nội dung từ backend - frontend nhận nội dung đó và render lên trình duyệt 
//API (URL)  --> Application programming interface
//cổng giao tiếp giữa các phần mềm
//Backend viết phần mềm bằng ngôn ngữ gì đó của backend, để backend mang theo cơ sở dữ liệu và đối tượng khác có thể giao tiếp được với backend thì các lập trình viên backend sẽ mở ra những API 
//hiểu đơn giản API chỉ là những url trả về những dữ liệu, và từ dữ liệu đấy render lên giao diện người dùng

//Backend => API(URL) => Fetch => JSON (80-90% trả về JSON -- đơn giản, nhẹ) => JSON.parse => JavaScript Type => Render ra giao diện với HTML 

// var courseAPI = 'http://localhost:3000/courses';

// function start () {
//     getCourses(renderCourses);
//     handleCreateForm();
// }

// //start để khởi động ứng dụng
// start(); //viết hàm gọi API, lấy dữ liệu ra và render ra view


// //Function 
// function getCourses(callback){
//     fetch(courseAPI)
//         .then(function(responses){
//             return responses.json();
//         })
//         .then(callback)
// }

// // Create
// function createCourses(data, callback){
//     var options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//           },
//         body: JSON.stringify(data)
//     };
//     fetch(courseAPI, options)
//         .then(function(response){
//            response.json()
//         })
//         .then(callback);
// }

// function handleCreateForm(){
//     var createBtn = document.querySelector('#create');

//     createBtn.onclick = function (){
//         var name = document.querySelector('input[name="name"]').value;
//         var description = document.querySelector('input[name="description"]').value;
//         var formData = {
//             name: name,
//             description: description
//         }
//         createCourses(formData, function(){
//             getCourses(renderCourses);
//         });
//     }
// }

// // Delete
// function handleDeleteCourses(id, callback){
//     var options = {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//           }
//     };
//     fetch(courseAPI + '/' + id, options)
//         .then(function(response){
//             response.json(); 
//         })
//         .then(callback)
// }

// function updateCourse(id, data, callback){
//     var option = {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//           },
//         body: JSON.stringify(data)
//     }
//     fetch(courseAPI + '/' + id, option)
//         .then(function(response){
//             response.json()
//         })
//         .then(callback)
// }

// function handleUpdateCourse(id){

//     var name = document.querySelector(`h4.course-item-${id}`).textContent;
//     var description = document.querySelector(`p.course-item-${id}`).textContent;

//     //lưu text đó vào 2 ô input
//     var nameEdit = document.querySelector('input[name="name"]').value = name;
//     var desEdit = document.querySelector('input[name="description"]').value = description;

//     //Thay thế nút create thành nút edit
//     var btnEdit = document.querySelector('#create')
//     console.log(btnEdit)
//     btnEdit.setAttribute("id", "edit")
//     btnEdit.innerText = "Edit"

//     btnEdit.onclick = function() {
//         //lấy ra text đã thay đổi
//         var nameEdit2 = document.querySelector('input[name="name"]').value;
//         var desEdit2 = document.querySelector('input[name="description"]').value;

//         var data = {
//             name: nameEdit2.trim(),
//             description: desEdit2.trim()
//         }

//         console.log(data);
//         updateCourse(id, data, function(){
//             getCourses(renderCourses);
//         });

//     }

   

// }


// //render html và đẩy ra html
// function renderCourses(courses){
//     var courseList = document.querySelector('#comment-block');
    
//     var html = courses.map(function(course){
//         var formData = {
//             name: course.name,
//             description: course.description
//         }
//         return `
//             <li>
//                 <h4 class="course-item-${course.id}">${course.name}</h4>
//                 <p class="course-item-${course.id}">${course.description}</p>
//                 <button onclick= "handleDeleteCourses(${course.id}, function(){
//                     getCourses(renderCourses);
//                 })">Xoá</button>
//                 <button onclick='handleUpdateCourse(${course.id})'>Chỉnh sửa</button>
//             </li>
//         `;
//     })
//     courseList.innerHTML = html.join('')

// }

//stream -- luồng trả về 
// fetch(courseAPI)
//     .then(function(response){
//         return response.json();
//         //JSON.parse
//     })
//     .then(function(courses){
//         var htmls = courses.map(function(course){
//             return `<li><h2>${course.name}</h2><p>${course.description}</p></li>`
//         });

//         var html = htmls.join("")
//         document.getElementById('comment-block').innerHTML = html

        
//     });


    //Bài tiếp: JSON Server: API Server
    //JSON Server: fake API Server (Mock API) -- không khác gì với làm việc với 1 API thật
    //CRUD 
    // - Create - POST
    // - read - GET
    // - update - PUT/PATCH
    // - delete - DELETE
    // -- Postman: cho phép gửi đi lệnh mà ko cần code

    //Sử dụng Postman làm việc với Rest API 


    // {
    //     var course = 'Javascript basic !!';
    // }

    // console.log(course);

var users = [
    { 
        id: 1,
        name: 'Kien Dam'

    },
    {
        id: 2,
        name: 'Son Dang'

    },
    {
        id: 3,
        name: 'Hung Dam'

    },
]

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Anh Son chua ra video'

    },
    {
        id: 2,
        user_id: 2,
        content: 'Vua ra xong em oi!'

    }, 
    {
        id: 3,
        user_id: 1,
        content: 'Em cảm ơn anh'
    }

]

//backend cung cap 2 api, api lay ra user và api lay ra comment
//lay ra comment va tu comment lay ra user_id
//tu user_id lay ra user tuong ung

//Fake API - mo phong ham goi data ma backend tra ve

function getComments(){
    return new Promise (
        function(resolve){
            setTimeout(function(){
                resolve(comments)

            }, 1000)
        }
    )
}

function getUsersByIds(user_ids){
    return new Promise(
        function(resolve){
            var result = users.filter(
                function(user, index){
                    return user_ids.includes(user.id)
                }
            )
            setTimeout(function() {
                resolve(result)
            }, 1000)
        }
    )
}


getComments()
    .then(function(comments){
        var user_ids = comments.map(function(comment){
            return comment.user_id

        })

        return getUsersByIds(user_ids)
            .then(function(users){
                return {
                    users: users,
                    comments: comments
                };
            });
    })
    .then(function(data){
        var commentBlock = document.getElementById("comment-block")
        var html = '';
        console.log(commentBlock)
        data.comments.forEach(function(comment){
            var user = data.users.find(function(user){
                return user.id == comment.user_id
            })
            html += `<li>${user.name}: ${comment.content}</li>`
        });

        commentBlock.innerHTML = html;

    })

