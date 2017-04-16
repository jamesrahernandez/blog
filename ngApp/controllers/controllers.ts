namespace blog.Controllers {

  export class LoginController {
    public userInfo;

    public login() {
      this.userService.loginUser(this.userInfo).then((data) => {
        this.$window.localStorage.setItem("token", JSON.stringify(data.token));
        this.$state.go('blog');
          alert('Login Successful!');
      });
    };

    public constructor(
      private userService,
      public $window,
      public $state,
    ) {

    };

  };

  export class RegisterController {
    public user;

    public signUp() {
      this.userService.registerUser(this.user).then(() => {
        this.$state.go('login');
        alert('Signup Successful, Please Login!');
      });
    };

    public constructor(
      private userService,
      public $state,
    ) {

  };

};

}
