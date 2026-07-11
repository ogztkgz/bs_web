# bs_web

Temel proje yapisi olusturuldu:

- `bs_frontend`: Angular standalone frontend
- `bs_backend`: ASP.NET Core Web API backend

## Notlar

- Backend proje dosyasi `net10.0` hedefleyecek sekilde ayarlandi.
- Bu makinede su anda yalnizca `.NET 8 SDK` kurulu oldugu icin backend restore/build calistirilmadi.
- Frontend tarafinda Angular iskeleti ve npm bagimliliklari kuruldu.

## Ilk calistirma komutlari

Frontend:

```bash
cd bs_frontend
npm start
```

Backend:

```bash
cd bs_backend
dotnet restore
dotnet run
```

Backend komutlari icin once `.NET 10 SDK` kurulumu gerekecek.
