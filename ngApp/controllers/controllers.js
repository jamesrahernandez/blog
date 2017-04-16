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
                var _this = this;
                this.userService.loginUser(this.userInfo).then(function (data) {
                    _this.$window.localStorage.setItem("token", JSON.stringify(data.token));
                    _this.$state.go('blog');
                    alert('Login Successful!');
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
                });
            };
            ;
            ;
            return RegisterController;
        }());
        Controllers.RegisterController = RegisterController;
        ;
        var AddBlogController = (function () {
            function AddBlogController(blogService, $state) {
                this.blogService = blogService;
                this.$state = $state;
            }
            AddBlogController.prototype.addBlog = function () {
                this.blogService.saveBlog(this.blog);
                this.$state.go('blog');
            };
            ;
            ;
            return AddBlogController;
        }());
        Controllers.AddBlogController = AddBlogController;
        ;
        var BlogController = (function () {
            function BlogController() {
            }
            return BlogController;
        }());
        Controllers.BlogController = BlogController;
    })(Controllers = blog.Controllers || (blog.Controllers = {}));
})(blog || (blog = {}));
;
