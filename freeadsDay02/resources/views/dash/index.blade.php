@extends('layout')
@section('content')
<div class="container">
    <div class="wrapper">
        <div class="card">
            <!-- <img src="img.jpg" alt="John" style="width:100%"> -->
            <h1>{{ Auth::user()->name }}</h1>
            <!-- <p class="title">CEO & Founder, Example</p> -->
            <p>You are successfully login.</p>
        </div>
    </div>
</div>

<div class="row">
    <a href="{{route('user.edit')}}">
        <button>Edit Profile</button>
    </a>
    <a href="{{route('logout')}}">
        <button>Logout</button>
    </a>
</div>
@endsection