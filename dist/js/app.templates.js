angular.module('dipan').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('directive/block/alert.block.alertUi.html',
    "<div id=\"alertUi\" ng-if=\"showAlertUi\">\n" +
    "    <div style=\"width: 100%;height: 100%;\" ng-class=\"alertUiClass\">\n" +
    "        <div class=\"left\" style=\"margin-left: 30px;width:50px;overflow: hidden\">\n" +
    "            <i class=\"fa fa-ban fa-4x\" style=\"color: #f4f4f4;margin-top: 7px\"></i>\n" +
    "        </div>\n" +
    "        <div class=\"left\" style=\"width:60%;overflow: hidden\">\n" +
    "            <div class=\"clear\" style=\"margin-left: 20px;font-size: 1.2em;margin-top: 10px \">{{title}}</div>\n" +
    "            <div class=\"clear\" style=\"margin-left: 20px;font-size: 0.9em;margin-top: 3px;color: #777;height: 20px;overflow: hidden \">{{content}}</div> </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('directive/block/loading.dipan.loanding.directive.html',
    "<i ng-show=\"loading\"  class=\"fa fa-spinner fa-spin fa-3x fa-fw loading\"></i>"
  );


  $templateCache.put('directive/block/tab.block.tabNav.directive.html',
    "<div id=\"tab\" class=\"clear\" style=\"\">\n" +
    "    <div ng-class=\"vo.colNumCss\" ng-repeat=\"vo in tabList\">\n" +
    "        <span ui-sref=\"{{vo.route}}\" ng-class=\"vo.thisItem\" class=\"btn\" ng-bind-html=\"vo.name|toHtml\"></span>\n" +
    "    </div>\n" +
    "    <style>\n" +
    "        .has-navbar-top .app-body {\n" +
    "            padding-top: 104px;\n" +
    "        }\n" +
    "    </style>\n" +
    "</div>"
  );


  $templateCache.put('directive/block/top.block.topNav.html',
    "<!--topNav-->\n" +
    "<div class=\"navbar navbar-app navbar-absolute-top\">\n" +
    "    <div class=\"navbar-brand navbar-brand-center\">\n" +
    "        <!--top中间title-->\n" +
    "        {{title}}\n" +
    "    </div>\n" +
    "    <div class=\"btn-group pull-left\">\n" +
    "\n" +
    "        <!--home-->\n" +
    "        <div class=\"btn\" ng-if=\"url !== '/home'\" onclick=\"history.go(-1);\">\n" +
    "            <!--top导航左侧图标-->\n" +
    "            <i class=\"fa fa-angle-left fa-lg\"></i>\n" +
    "        </div>\n" +
    "\n" +
    "        <!--default-->\n" +
    "        <div class=\"btn\" ng-if=\"url == '/home'\" ui-sref=\"memberIndex\" >\n" +
    "            <!--top导航左侧图标-->\n" +
    "            <i class=\"fa fa-location-arrow fa-lg\" aria-hidden=\"true\" ></i>\n" +
    "            <!--<i class=\"fa fa-caret-down fa-1\" aria-hidden=\"true\" ></i>-->\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"btn-group pull-right\">\n" +
    "        <div class=\"btn\">\n" +
    "            <!--top导航右侧图标-->\n" +
    "            <i class=\"fa fa-search fa-lg\"></i>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div tab ng-if=\"showTab\"></div>\n" +
    "</div>\n"
  );


  $templateCache.put('directive/home.dipan.home.directive.html',
    "<div class=\"scrollable-content\" ui-scroll-bottom=\"a()\">\n" +
    "    <div class=\"list-group\">\n" +
    "        <a class=\"list-group-item \" ng-repeat=\"vo in list\" style=\"height: 100px\">\n" +
    "            <span style=\"font-size: 1.4em\">{{vo.branch_name}}</span> <i class=\"fa fa-chevron-right pull-right\"></i>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('directive/member/my.dipan.myIndexNav.html',
    "<div class=\"scrollable-content\" ui-scroll-bottom=\"bottomReached()\">\n" +
    "    <div class=\"list-group\">\n" +
    "        <a ui-sref=\"{{vo.url}}\" class=\"list-group-item ng-binding ng-scope\" ng-repeat=\"vo in listNav\">\n" +
    "           <span style=\"font-size: 1.4em\">{{vo.name}}</span>  <i class=\"fa fa-chevron-right pull-right\"></i>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('index.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<head>\n" +
    "    <meta charset=\"utf-8\"/>\n" +
    "    <title>dipan.so</title>\n" +
    "    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\"/>\n" +
    "    <meta name=\"apple-mobile-web-app-capable\" content=\"yes\"/>\n" +
    "    <meta name=\"viewport\" content=\"user-scalable=no, initial-scale=1.0, maximum-scale=1.0\"/>\n" +
    "    <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"yes\"/>\n" +
    "\n" +
    "    <script>\n" +
    "\n" +
    "        (function (window) {\n" +
    "            //判断web 还是 app\n" +
    "            window.trueWeb = trueWeb;\n" +
    "            function trueWeb() {\n" +
    "                var url = window.location.href;\n" +
    "                url = url.split(':');\n" +
    "                if (url[0] === 'http') {\n" +
    "                    return true;\n" +
    "                }\n" +
    "            }\n" +
    "\n" +
    "            //web端\n" +
    "            if (trueWeb()) {\n" +
    "                document.write('<script src=\"/Public/app/dist/js/init.js\"><\\/script>');\n" +
    "            } else {\n" +
    "\n" +
    "                //app 端\n" +
    "                document.write('<script src=\"../../dist/js/init.js\"><\\/script>');\n" +
    "\n" +
    "            }\n" +
    "        })(window);\n" +
    "\n" +
    "    </script>\n" +
    "</head>\n" +
    "\n" +
    "<body ng-app=\"dipan\" class=\"angularEnd\" ng-controller=\"body\">\n" +
    "<div class=\"app\">\n" +
    "    <!-- topNavbars -->\n" +
    "    <div top></div>\n" +
    "\n" +
    "    <div class=\"navbar navbar-app navbar-absolute-bottom\">\n" +
    "        <div class=\"btn-group justified\">\n" +
    "            <!--底部连接-->\n" +
    "            <a ui-sref=\"home\" class=\"btn btn-navbar\"><i class=\"fa fa-home fa-navbar fa-lg\"></i> </a>\n" +
    "            <a href=\"#\" class=\"btn btn-navbar\"><i\n" +
    "                    class=\"fa fa-map-marker fa-navbar fa-lg\"></i> </a>\n" +
    "            <a ui-sref=\"memberIndex\" class=\"btn btn-navbar\"><i\n" +
    "                    class=\"fa fa-user fa-navbar fa-lg\"></i> </a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- App Body -->\n" +
    "    <div class=\"app-body\">\n" +
    "        <!--loading directive-->\n" +
    "        <div loading></div>\n" +
    "        <div alert></div>\n" +
    "        <ui-view></ui-view>\n" +
    "    </div>\n" +
    "\n" +
    "</div><!-- ~ .app -->\n" +
    "\n" +
    "<!--数据div-->\n" +
    "<!--<div url-parse={{$indexAllRe}}></div>-->\n" +
    "\n" +
    "</body>\n" +
    "</html>\n"
  );


  $templateCache.put('route/home.html',
    "\n" +
    "<div home></div>\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('route/member/loginOut.html',
    "<div login-out></div>\n" +
    "<script>\n" +
    "\n" +
    "</script>"
  );


  $templateCache.put('route/member/memberIndex.html',
    "<!--我的导航列表-->\n" +
    "<div my></div>\n"
  );


  $templateCache.put('route/member/memberInfo.html',
    "memberINfo"
  );


  $templateCache.put('updata.html',
    "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "<head>\n" +
    "    <meta charset=\"UTF-8\">\n" +
    "    <title>Title</title>\n" +
    "    <script>\n" +
    "        (function (window) {\n" +
    "            //判断web 还是 app\n" +
    "            window.trueWeb = trueWeb;\n" +
    "            function trueWeb() {\n" +
    "                var url = window.location.href;\n" +
    "                url = url.split(':');\n" +
    "                if (url[0] === 'http') {\n" +
    "                    return true;\n" +
    "                }\n" +
    "            }\n" +
    "\n" +
    "        })(window);\n" +
    "    </script>\n" +
    "    <script src=\"../../dist/js/init.js\"></script>\n" +
    "    <script src=\"../../dist/js/updata.js\"></script>\n" +
    "</head>\n" +
    "<body>\n" +
    "<h1>\n" +
    "\n" +
    "    upData\n" +
    "</h1>\n" +
    "</body>\n" +
    "</html>"
  );

}]);
