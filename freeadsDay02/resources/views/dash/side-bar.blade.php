 <a href="{{ route('user.edit') }}">
     <button>Edit Profile</button>
 </a>
 <hr>
 <a href="{{ route('logout') }}">
     <button>Logout</button>
 </a>
 <hr>
 <a href="{{ route('user.destroy', ['id' => Auth::id()]) }}">
     <button>Delete Account</button>
 </a>
