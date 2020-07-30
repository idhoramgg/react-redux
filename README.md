------ Redux aja ---------------
1. install yarn add redux.

2. create store menggunakan method createStore dari redux.

3. Pisahin folder action dan reducers, sehingga store hanya memiliki import root reducer dan store itu sendiri.

4. define initial state di masing-masing reducer

5. buat action creator beserta type nya, untuk memberikan informasi fungsi apa yg dibuat

6. buat fungsi / reducer untuk mengeksekusi perubahan state yang akan dilakukan sesuai informasi dari action creator

7. buat fungsi button tambah dan kurang di react component / pages mu, dengan menggunakan method, store.dispatch(action) --> store = diimport dari store, dispatch nama fungsi bawaan redux, action diimport dari file action creator.

8. buat tampilan menggunakan componentDidMount dengan state lokal, lalu render ulang perubahan state dengan menggunakan method Subrek yg berisi fungsi bawaan setState untuk mengubah state lokal dengan state global, setiap halaman di render ulang.

 --------- jika menggunakan react-redux -------------
1. yarn add react-redux

2. kunjungi halaman index.js / root file, dan letakan {Provider} dan jadikan Provider pembungkus file App mu, lalu import store dari 'file store yang telah kita buat'.

3. Provider memiliki 1 props wajib yang bernama "store" yang akan diberi nilai "store" juga, dari store yang kita buat.

4. Gunakan {connect} di setiap file / komponen yang ingin menggunakan global state dari store.

5. Buat fungsi mapStateToProps untuk passing data "state" dari global state redux, kedalam "props" komponen/ pagemu

6. Buat fungsi mapDispatchToProps untuk passing function / method dari global fungsi/ methiod redux, kedalam "props" komponen/ pagemu

