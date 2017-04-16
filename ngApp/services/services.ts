namespace blog.Services {

  export class UserService {
    public LoginResource
    public SignUpResource

    public registerUser(userObj) {
      return this.SignUpResource.save(userObj).$promise;
    };

    public loginUser(userInfo) {
      return this.LoginResource.save(userInfo).$promise;
    };

    constructor(private $resource:ng.resource.IResourceService){
      this.LoginResource = this.$resource('/userRoutes/api/Login/Local');
      this.SignUpResource = this.$resource('/userRoutes/api/Register');
    };

  };

  export class BlogService {
  private BlogResource;

  public saveBlog(blog) {
    return this.BlogResource.save(blog);
  }

  public list() {
    return this.BlogResource.query();
  }

  public constructor(
    public $resource
  ) {
    this.BlogResource = $resource('/api/blogs/:id');
  }
}

  angular.module('blog').service('userService', UserService);
  angular.module('blog').service('blogService', BlogService);
}
