using Microsoft.AspNetCore.Http.Features;
using Microsoft.Extensions.FileProviders;
using recefever_webapi.Models;
using recefever_webapi.Services;

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      builder =>
                      {
                          builder.WithOrigins("http://localhost:4200/",
                                              "http://www.contoso.com")
                                               .AllowAnyOrigin()
                                               .AllowAnyHeader()
                                               .AllowAnyMethod();
                      });
});

// Add services to the container.
builder.Services.Configure<RecipeDatabaseSettings>(
builder.Configuration.GetSection("RecefeverDatabase"));
builder.Services.AddSingleton<UserService>();
builder.Services.AddSingleton<RecipeService>();
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.Configure<FormOptions>(o => {
    o.ValueLengthLimit = int.MaxValue;
    o.MultipartBodyLengthLimit = int.MaxValue;
    o.MemoryBufferThreshold = int.MaxValue;
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseStaticFiles(new StaticFileOptions()
{
    FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), "Resources/Images")),
    RequestPath = new PathString("/StaticFiles")
});

app.UseRouting();

app.UseCors(MyAllowSpecificOrigins);

app.UseAuthorization();

app.MapControllers();

app.Run();
