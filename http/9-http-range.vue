<template>
    <div>
        <img :src="url">
    </div>
</template>

<script>
export default {
    data(){
        return {
            url: '',
            image01 : '',
            image02 : '',
            imageType: ''
        }
    },
    methods:{
        getPart(part){
            return new Promise((resolve, reject) => {
                let _this = this 
                var xhr = new XMLHttpRequest();
                var urlJpg = 'http://10.200.137.53:9090/api/sources/5fea9f5663f0a.jpg'
                var url = 'http://10.200.137.53:9090/api/sources/media/20201229/20201229041702_90213.mp4'
                xhr.open('GET',urlJpg);
                xhr.setRequestHeader('Range',part)
                xhr.responseType = 'blob'
                xhr.onload = function(){
                    //假如请求的范围不合法，那么服务器会返回416
                    //xhr.status = 416
                    //xhr.statusText = "Requested Range Not Satisfiable"
                    // xhr.status = 206
                    // xhr.statusText = 'Partial Content'
                    // xhr.readyState = 4
                    //Response Headers
                    //accept-ranges: bytes
                    //Content-length:191
                    //Content-Range: bytes 10-200/467454
                    var imageType = xhr.getResponseHeader("Content-Type");
                    _this.imageType = imageType
                    var blob = new Blob([xhr.response], {type: imageType})
                    resolve(blob)
                    // console.log(blob)
                    // _this.image01 = blob
                    // var imageUrl = (window.URL || window.webkitURL).createObjectURL(blob);
                    // console.log(imageUrl)
                    // _this.url = imageUrl

                }
                xhr.send()
            });
        
        }
    },
    mounted(){
        let _this = this
        var arr = [_this.getPart('bytes=0-10000'), _this.getPart('bytes=10000-')]
        var promise = Promise.all(arr)
        promise.then(res=>{
            var allBlob = new Blob(res, {type: _this.imageType})
            var imageUrl = (window.URL || window.webkitURL).createObjectURL(allBlob);
            _this.url = imageUrl

            var link = document.createElement('a')
            link.href = _this.url
            link.download = '图片';
            link.click();
            //window.URL.revokeObjectURL(_this.url)
        })
    }
        
        
}
</script>

<!--TCP 网络阻塞 -->