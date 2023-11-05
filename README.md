# ClipCalc

[English version is here](./README_E.md)

プログラム関数電卓です。CLIP言語で記述されたプログラムを外部関数として呼び出し、実行することができます。

## ビルド方法

事前に環境変数"SKCOMMONPATH"、"CLIPPATH"、"AJAXMINPATH"の設定を行ってください。

ビルドには別途、次のプロジェクトが必要です。

https://github.com/SatisKia/common
https://github.com/SatisKia/clip

ローカルのプロジェクトフォルダパスを環境変数"SKCOMMONPATH"、"CLIPPATH"に設定します。

また、ビルドには別途、次のツールが必要です。

### MinGW

UTF-8対応Cプリプロセッサとして使用します。

### Microsoft Ajax Minifier

JavaScriptコードの圧縮・難読化ツールです。AjaxMin.exeが格納されているフォルダのパスを環境変数"AJAXMINPATH"に設定します。
