function TestServices($http){
    //get方法
    this.get = function(url, jsonData, successCallback, errCallback){
        if($http!=undefined){
            var p = $http({
                method : 'get',
                url : url,
                params : jsonData,
                headers : {
                    contentType : 'application/json;charset=UTF-8'
                }
            });
            p.success(function(data, status) {
                if(typeof successCallback === 'function')
                    successCallback(data, status);
            });
            p.error(function(data, status) {
                if(typeof errCallback === 'function')
                    errCallback(data, status);
            });
        }else{
            $.ajax({
                method : 'get',
                url : url,
                data: jsonData,
                success: function(data, status){
                    if(typeof successCallback === 'function')
                        successCallback(data, status);
                },
                error:function(data, status){
                    if(typeof errCallback === 'function')
                        errCallback(data, status);
                }
            });
        }
    }

}