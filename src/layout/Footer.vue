<template>
    <footer class="footer has-cards">
        <div class="container">
            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; 2018 JiCos.
                    </div>
                </div>
                <div class="col-md-6">
                    <ul class="nav nav-footer justify-content-end">
                      <li class="nav-item">
                            <a href="https://www.creative-tim.com/presentation" class="nav-link" target="_blank">About
                                Us</a>
                        </li>
                      <li class="nav-item">
                            <a href="#" @click.prevent="showAlert()"
                               class="nav-link" target="_blank">개인정보처리방침</a>
                        </li>
                      <li class="nav-item">
                        <a href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                           class="nav-link" target="_blank">MIT License</a>
                      </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  methods: {
    showAlert() {
      alert("준비중입니다.");
    }
  }
};
</script>
<style>
</style>
