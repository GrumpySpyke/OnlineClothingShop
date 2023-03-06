
using Microsoft.AspNetCore.Builder;
using OnlineClothingShop.Configuration;
using OnlineClothingShop.Repository;
using OnlineClothingShop.Repository.Contracts;

var builder = WebApplication.CreateBuilder(args);

//Configuring database
var env = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
var configuration = new ConfigurationBuilder()
    .SetBasePath(Directory.GetCurrentDirectory())
    .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
    .AddJsonFile($"appsetings.{env}.json", optional: true, reloadOnChange: true)
    .Build();
var SHOP_ALLOW_SPECIFIC_ORIGINS = "ShopAllowSpecificOrigins";
IConfigurationSection databaseSection = configuration.GetSection("DatabaseOptions");
builder.Services.Configure<DatabaseOptions>(databaseSection);

//Dependecy Injection
//builder.Services.AddTransient<IDatabaseRepository, DatabaseRepository>();

builder.Services.AddSwaggerGen();
builder.Services.AddControllersWithViews();
builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: SHOP_ALLOW_SPECIFIC_ORIGINS,
        policy =>
    {
        policy.WithOrigins("https://localhost:7068")
               .AllowAnyHeader()
               .AllowAnyMethod()
               .AllowCredentials();
        policy.WithOrigins("https://localhost:4200")
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials();
    });
});

var app = builder.Build();

app.UseSwagger(options=>
{
});
app.UseSwaggerUI(options=>
{
    options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
    options.RoutePrefix = string.Empty;
   
});

app.UseHsts();

//app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();
//app.UseMiddleware();

//app.UseEndpoints(
//    endpoints=>
//    {
//        endpoints.MapControllers();
//    });

app.Run();
