var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

//apps that I need to run to have everything connect and work

app.UseDefaultFiles();
app.UseStaticFiles();
app.Run();
