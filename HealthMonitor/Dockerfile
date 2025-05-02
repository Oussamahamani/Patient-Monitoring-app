FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["HealthMonitor/HealthMonitor.csproj", "HealthMonitor/"]
RUN dotnet restore "HealthMonitor/HealthMonitor.csproj"
COPY . .
WORKDIR "/src/HealthMonitor"
RUN dotnet build "HealthMonitor.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "HealthMonitor.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "HealthMonitor.dll"]
