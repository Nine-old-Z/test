// JavaScript Document


//发表留言
function ajax_addMessage1(realname, email, company,nation, content) {
    if (realname.length < 1) { alert("请填写您的姓名！"); return; }
    if (email.length < 1) { alert("请填写您的电子邮箱！"); return; }
    if (!checkEmail(email)) { alert("请填写正确的电子邮箱！"); return; }
    //if (tel.length < 1) { alert("请填写您的手机号！"); return; }
    //if (!checkMobile(tel)) { alert("请填写正确的手机号！"); return; }
    if (company.length < 1) { alert("请填写您的单位！"); return; }
    if (nation.length < 1) { alert("请填写您的国家！"); return; }
    if (content.length < 1) { alert("请输入留言内容！"); return; }

    //alert(realname + "//" + age + "//" + sex + "//" + school + "//" + tel + "//" + email);
    //return;
    $.get("/ajax/message.ashx", {
        rnd: Math.floor(Math.random() * 9999),
        handle: "add",
        realname: escape(realname),
        type: escape(nation),
        email: escape(email),
        com: escape(company),
        mycontent: escape(content),
        gid: 3
    }, function (data, textStatus) {
        if (textStatus == "success") {
            alert("提交成功！");
            //window.location.reload();
            window.location.href = '/';
        }
    });
}
function ajax_addMessage1en(realname, email, company, nation, content) {
    if (realname.length < 1) { alert("Please fill in your name！"); return; }
    if (email.length < 1) { alert("Please fill in your email address！"); return; }
    if (!checkEmail(email)) { alert("Please fill in the correct email address！"); return; }
    //if (tel.length < 1) { alert("请填写您的手机号！"); return; }
    //if (!checkMobile(tel)) { alert("请填写正确的手机号！"); return; }
    if (company.length < 1) { alert("Please fill in your company！"); return; }
    if (nation.length < 1) { alert("Please fill in your country！"); return; }
    if (content.length < 1) { alert("Please enter the message！"); return; }

    //alert(realname + "//" + age + "//" + sex + "//" + school + "//" + tel + "//" + email);
    //return;
    $.get("/ajax/message.ashx", {
        rnd: Math.floor(Math.random() * 9999),
        handle: "add",
        realname: escape(realname),
        type: escape(nation),
        email: escape(email),
        com: escape(company),
        mycontent: escape(content),
        gid: 3
    }, function (data, textStatus) {
        if (textStatus == "success") {
            alert("Submitted successfully！");
            //window.location.reload();
            window.location.href = '/en/';
        }
    });
}
function ajax_addMessage2(realname, tel, email, content, company, pro, type) {
    if (company.length < 1) { alert("请填写您的单位！"); return; }
    if (realname.length < 1) { alert("请填写您的姓名！"); return; }
    if (tel.length < 1) { alert("请填写您的手机号！"); return; }
    if (!checkMobile(tel)) { alert("请填写正确的手机号！"); return; }
    if (email.length < 1) { alert("请填写您的电子邮箱！"); return; }
    if (!checkEmail(email)) { alert("请填写正确的电子邮箱！"); return; }
    if (content.length < 1) { alert("请输入留言内容！"); return; }

    //alert(realname + "//" + age + "//" + sex + "//" + school + "//" + tel + "//" + email);
    //return;
    $.get("/ajax/message.ashx", {
        rnd: Math.floor(Math.random() * 9999),
        handle: "add",
        realname: escape(realname),
        tel: escape(tel),
        email: escape(email),
        mycontent: escape(content),
        com: escape(company),
        pro: escape(pro),
        type: escape(type),
        gid: 2
    }, function (data, textStatus) {
        if (textStatus == "success") {
            $("#serForm").hide();
            $(".serTip").show();
            //alert("提交成功！");
            //window.location.reload();
        }
    });
}
function ajax_addMessage3(realname, tel, email, content, company, pro, title,addr,mobile,fax) {
    if (realname.length < 1) { alert("请填写您的姓名！"); return; }
    if (company.length < 1) { alert("请填写您的单位！"); return; }
    if (tel.length < 1) { alert("请填写您的手机号！"); return; }
    if (!checkMobile(tel)) { alert("请填写正确的手机号！"); return; }
    if (email.length < 1) { alert("请填写您的电子邮箱！"); return; }
    if (!checkEmail(email)) { alert("请填写正确的电子邮箱！"); return; }
    if (content.length < 1) { alert("请输入问题描述！"); return; }

    //alert(realname + "//" + age + "//" + sex + "//" + school + "//" + tel + "//" + email);
    //return;
    $.get("/ajax/message.ashx", {
        rnd: Math.floor(Math.random() * 9999),
        handle: "add",
        realname: escape(realname),
        tel: escape(tel),
        email: escape(email),
        mycontent: escape(content),
        com: escape(company),
        pro: escape(pro),
        title: escape(title),
        addr: escape(addr),
        mobile: escape(mobile),
        fax: escape(fax),
        gid: 1
    }, function (data, textStatus) {
        if (textStatus == "success") {
            alert("提交成功！");
            window.location.reload();
        }
    });
}
//验证规则：11位数字，以1开头。
function checkMobile(str) {
    var re = /^1\d{10}$/
    if (re.test(str)) {
        return true;
    } else {
        return false;
    }
}
//验证邮箱
//验证规则：姑且把邮箱地址分成“第一部分@第二部分”这样
//第一部分：由字母、数字、下划线、短线“-”、点号“.”组成，
//第二部分：为一个域名，域名由字母、数字、短线“-”、域名后缀组成，
//而域名后缀一般为.xxx或.xxx.xx，一区的域名后缀一般为2-4位，如cn,com,net，现在域名有的也会大于4位
function checkEmail(str) {
    var re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
    if (re.test(str)) {
        return true;
    } else {
        return false;
    }
}