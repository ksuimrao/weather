var gulp = require('gulp'); //gulpパッケージの宣言
var browsersync = require("browser-sync").create(); //browser-syncパッケージの宣言
var sass = require('gulp-sass');    //sassパッケージの宣言

// サーバーを立ち上げる
gulp.task('build-server', function (done) {
    browsersync.init({
        server: {
            baseDir: "../"
        }
    });
    done();
    console.log('Server was launched');
});

// ブラウザのリロード
gulp.task('browser-reload', function (done){
    browsersync.reload();
    done();
    console.log('Browser reload completed');
});

// 監視ファイル
gulp.task('watch-files', function(done) {
    gulp.watch("../*/*.html", gulp.task('browser-reload'));
    gulp.watch("../*/*.css", gulp.task('browser-reload'));
    gulp.watch("../*/*.js", gulp.task('browser-reload'));
    gulp.watch("../*/*.scss",gulp.series('sass-compile'));
    done();
    console.log(('gulp watch started'));
});

// scss用のコンパイル作業
gulp.task('sass-compile', function(done){
    // gulp.src('../scss/*.scss') // scssがあるパスを指定
    //     .pipe(sass().on('error', sass.logError)) // scssコンパイル実行
    //     .pipe(gulp.dest('../css')) // 書き出し先
    //     .pipe(sass.sync({outputStyle: 'expanded'});
    // done();
    // style.scssファイルを取得
  return (
    gulp
      .src("../scss/*.scss")
      // Sassのコンパイルを実行
      .pipe(
        sass({
          outputStyle: "expanded"
        })
      )
      // cssフォルダー以下に保存
      .pipe(gulp.dest("../css"))
  );
});

// デフォルトコマンドでのタスクの実行
gulp.task('default', gulp.series('build-server', 'watch-files', 'sass-compile', function(done){
    done();
    console.log('Default all task done!');
}));
