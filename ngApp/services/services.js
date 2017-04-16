var blog;
(function (blog_1) {
    var Services;
    (function (Services) {
        var UserService = (function () {
            function UserService($resource) {
                this.$resource = $resource;
                this.LoginResource = this.$resource('/userRoutes/api/Login/Local');
                this.SignUpResource = this.$resource('/userRoutes/api/Register');
            }
            UserService.prototype.registerUser = function (userObj) {
                return this.SignUpResource.save(userObj).$promise;
            };
            ;
            UserService.prototype.loginUser = function (userInfo) {
                return this.LoginResource.save(userInfo).$promise;
            };
            ;
            ;
            return UserService;
        }());
        Services.UserService = UserService;
        ;
        var BlogService = (function () {
            function BlogService($resource) {
                this.$resource = $resource;
                this.BlogResource = $resource('/api/blogs/:id');
            }
            BlogService.prototype.saveBlog = function (blog) {
                return this.BlogResource.save(blog);
            };
            BlogService.prototype.list = function () {
                return this.BlogResource.query();
            };
            return BlogService;
        }());
        Services.BlogService = BlogService;
        angular.module('blog').service('userService', UserService);
        angular.module('blog').service('blogService', BlogService);
    })(Services = blog_1.Services || (blog_1.Services = {}));
})(blog || (blog = {}));
