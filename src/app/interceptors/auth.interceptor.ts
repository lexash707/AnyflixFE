import { HttpInterceptorFn } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';


export const authInterceptor: HttpInterceptorFn = (req, next) => {
  var token = localStorage.getItem('token')
  if(token != null){
    req.headers.append('Authorization', `Bearer ${token}`);
  }
  return next(req);
};
