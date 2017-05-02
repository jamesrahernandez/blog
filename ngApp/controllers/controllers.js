var token = window.localStorage['token'];
var blog;
(function (blog) {
    var Controllers;
    (function (Controllers) {
        var LoginController = (function () {
            function LoginController(userService, $window, $state) {
                this.userService = userService;
                this.$window = $window;
                this.$state = $state;
            }
            LoginController.prototype.login = function () {
                if (this.isAdmin === true) {
                    this.userInfo.role = 'admin';
                    this.createSession();
                }
                else {
                    this.userInfo.role = 'guest';
                    this.createSession();
                }
                ;
            };
            ;
            LoginController.prototype.createSession = function () {
                var _this = this;
                this.userService.loginUser(this.userInfo).then(function (data) {
                    _this.$window.localStorage.setItem("token", JSON.stringify(data.token));
                    _this.$state.go('blog');
                });
            };
            ;
            ;
            return LoginController;
        }());
        Controllers.LoginController = LoginController;
        ;
        var RegisterController = (function () {
            function RegisterController(userService, $state) {
                this.userService = userService;
                this.$state = $state;
            }
            RegisterController.prototype.signUp = function () {
                var _this = this;
                this.userService.registerUser(this.user).then(function () {
                    _this.$state.go('login');
                    alert('Signup Successful, Please Login!');
                    console.log("You Have Created An Account");
                });
            };
            ;
            ;
            return RegisterController;
        }());
        Controllers.RegisterController = RegisterController;
        ;
        var BlogController = (function () {
            function BlogController(blogService) {
                this.blogService = blogService;
                var token = window.localStorage['token'];
                if (token) {
                    this.payload = JSON.parse(window.atob(token.split('.')[1]));
                    console.log(this.payload);
                    this.blogs = this.blogService.list(this.payload.id);
                }
                ;
            }
            BlogController.prototype.deleteBlog = function (id) {
                if (this.payload.role === 'admin') {
                    alert('Success!');
                    this.blogService.removeBlog(id);
                    console.log("You Have Deleted A Blog Post");
                }
                else {
                    alert('Denied! Admins Only.');
                }
                ;
            };
            ;
            ;
            return BlogController;
        }());
        Controllers.BlogController = BlogController;
        ;
        var AddBlogController = (function () {
            function AddBlogController(blogService, $state) {
                this.blogService = blogService;
                this.$state = $state;
                var token = window.localStorage['token'];
                if (token) {
                    this.payload = JSON.parse(window.atob(token.split('.')[1]));
                    console.log(this.payload);
                    this.blogs = this.blogService.list(this.payload.id);
                }
                ;
            }
            AddBlogController.prototype.addBlog = function () {
                if (this.payload.role === 'admin') {
                    alert('Success!');
                    this.blog.owner_id = this.payload.id;
                    this.blogService.saveBlog(this.blog);
                    this.$state.go('blog');
                    console.log("You Have Created A Blog Post");
                }
                else {
                    alert('Denied! Admins Only.');
                }
                ;
            };
            ;
            ;
            return AddBlogController;
        }());
        Controllers.AddBlogController = AddBlogController;
        ;
        var EditBlogController = (function () {
            function EditBlogController(blogService, $stateParams, $state) {
                this.blogService = blogService;
                this.$stateParams = $stateParams;
                this.$state = $state;
                this.id = $stateParams['id'];
                var token = window.localStorage['token'];
                if (token) {
                    this.payload = JSON.parse(window.atob(token.split('.')[1]));
                    console.log(this.payload);
                }
                ;
            }
            EditBlogController.prototype.editBlog = function () {
                if (this.payload.role === 'admin') {
                    alert('Success!');
                    this.blog.id = this.id;
                    this.blogService.saveBlog(this.blog);
                    this.$state.go('blog');
                    console.log("You Have Updated A Blog Post");
                }
                else {
                    alert('Denied! Admins Only.');
                }
                ;
            };
            ;
            ;
            return EditBlogController;
        }());
        Controllers.EditBlogController = EditBlogController;
        ;
    })(Controllers = blog.Controllers || (blog.Controllers = {}));
})(blog || (blog = {}));
;
