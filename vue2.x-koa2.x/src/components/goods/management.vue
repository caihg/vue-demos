<template>
  <el-form :model="goodsForm" :rules="goodsFormRules" ref="goodsForm" label-width="100px" v-loading="goodsForm.loading" element-loading-text="拼命加载中" class="goods-rule-form">
    <el-form-item label="名称" prop="name">
      <el-input v-model="goodsForm.name"></el-input>
    </el-form-item>
    <el-form-item label="描述" prop="description">
      <el-input type="textarea" v-model="goodsForm.description"></el-input>
    </el-form-item>
    <el-form-item label="图片" prop="imgUrl">
      <el-upload
        list-type="picture-card"
        action="/uploads/img"
        :file-list="goodsForm.fileList"
        :on-success="uploadSuccess"
        :on-preview="previewPicture"
        :on-remove="removePicture">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog v-model="goodsForm.dialogVisible" size="tiny">
        <img width="100%" :src="goodsForm.dialogImgUrl" alt="">
      </el-dialog>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" :loading="goodsForm.btnLoading" @click="submitForm('goodsForm')">提交</el-button>
      <el-button @click="resetForm('goodsForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    var validateGoodsName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入商品名称'));
      } else {
        callback();
      }
    };

    return {
      goodsForm: {
        loading: true,
        goodsId: '',
        name: '',
        description: '',
        imgUrl: '',
        fileList: [],
        dialogImgUrl: '',
        dialogVisible: false,
        btnLoading: false
      },
      goodsFormRules: {
        name: [
          { validator: validateGoodsName, trigger: 'blur' }
        ]
      }
    };
  },
  created() {
    const lastIndex = window.location.href.lastIndexOf('/');
    const idStr = window.location.href.slice(lastIndex + 1);
    const urlRet = /(\d+)/.exec(idStr);
    const goodsId = urlRet && urlRet[1];

    if (goodsId) {
      this.goodsId = goodsId;
      this.getGoodsDetails().then(() => {
        let url = '';
        this.goodsForm.fileList.forEach(function(item) {
          url += (url ? ';' : '') + item.url
        });
        this.goodsForm.imgUrl = url;
      });
    } else {
      this.goodsForm.loading = false;
    }
  },
  methods: {
    getGoodsDetails() {
      return this.$http.get('/goods/' + this.goodsId)
      .then((response) => {
        this.goodsForm.loading = false;

        if (response.status == 200) {
          const data = response.data.list && response.data.list[0];
          let fileList = [];

          this.goodsForm.name = data.name;
          this.goodsForm.description = data.description;

          if (data.img_url) {
            data.img_url.split(';').forEach(function(item) {
              fileList.push({url: item});
            });
            this.goodsForm.fileList = fileList;
          }
        } else {
          this.$message.error('获取商品失败！');
        }
      }, (error) => {
        this.goodsForm.loading = false;
        this.$message.error('网络错误！');
      });
    },
    uploadSuccess(response, file, fileList) {
      this.goodsForm.imgUrl += (this.goodsForm.imgUrl ? ';' : '') + response.filePath;
    },
    removePicture(file, fileList) {
      let files = this.goodsForm.fileList;
      this.goodsForm.fileList.forEach(function(item, index) {
        if (item.url === file.url) {
          files.splice(index, 1);
        }
      });
      this.goodsForm.fileList = files;

      let url = '';
      files.forEach(function(item) {
        url += (url ? ';' : '') + item.url;
      });
      this.goodsForm.imgUrl = url;

      // console.log(file, fileList);
    },
    previewPicture(file) {
      console.log(file);
      /*this.goodsForm.dialogImageUrl = window.URL.createObjectURL(file.response.filePath);
      this.goodsForm.dialogVisible = true;*/
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const id = this.goodsId;
          const name = this.goodsForm.name;
          const description = this.goodsForm.description;
          const imgUrl = this.goodsForm.imgUrl;
          const redirectUrl = '/page/goods';
          const data = {
            name,
            description,
            imgUrl
          };

          if (id) {
            data.id = id;
          }

          this.goodsForm.btnLoading = true;

          this.$http.post('/goods/management', data)
          .then((response) => {
            this.goodsForm.btnLoading = false;

            if (response.status == 200) {
              // this.$router.push(redirectUrl);
            } else {
              this.$message.error('修改商品失败！');
            }
          }, (error) => {
            this.goodsForm.btnLoading = false;
            this.$message.error('网络错误！');
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
