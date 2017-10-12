#include <node.h>
#include <stdio.h>

namespace demo {

using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Value;
using v8::Null;
using v8::Number;
using v8::Function;
using v8::Exception;

void Method(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  args.GetReturnValue().Set(String::NewFromUtf8(isolate, "world"));
}

void Welcome(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  args.GetReturnValue().Set(String::NewFromUtf8(isolate, "WHAT IS HAPPENING"));
}

void Add(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();

  printf("ADD HAS BEEN CALLED\n");

  // check number of arguments passed.
  if (args.Length() < 2) {
    isolate->ThrowException(Exception::TypeError(String::NewFromUtf8(isolate, "Wrong number of arguments.")));
    return;
  }

  // check the argument types.
  if (!args[0]->IsNumber() || !args[1]->IsNumber()) {
    isolate->ThrowException(Exception::TypeError(String::NewFromUtf8(isolate, "Wrong type of arguments.")));
    return;
  }

  // perform the operation
  double value = args[0]->NumberValue() + args[1]->NumberValue();
  Local<Number> num = Number::New(isolate, value);

  // set the return value
  args.GetReturnValue().Set(num);
}

void Doit(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  Local<Function> cb= Local<Function>::Cast(args[0]);
  const unsigned argc = 1;
  Local<Value> argv[argc] = {String::NewFromUtf8(isolate, "GARDEN OF HEAVEN")};
  cb->Call(Null(isolate), argc, argv);
}

void init(Local<Object> exports) {
  NODE_SET_METHOD(exports, "hello", Method);
  NODE_SET_METHOD(exports, "welcome", Welcome);
  NODE_SET_METHOD(exports, "add", Add);
  NODE_SET_METHOD(exports, "doit", Doit);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, init)

}  // namespace demo
