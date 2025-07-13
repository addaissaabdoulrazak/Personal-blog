import { defineStore } from 'pinia'

// Base de données complète des articles avec support multilingue
const articles = {
  fr: [
    {
      id: 1,
      title: 'Sécuriser une application Spring Boot avec Spring Security',
      date: '2024-07-15',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'security',
      tags: ['Spring Security', 'Authentification', 'JWT', 'Spring Boot'],
      excerpt: "Apprenez à protéger votre application Spring Boot en implémentant l'authentification et l'autorisation.",
      content: `<h2>Configuration de base</h2>
        <p>Ajoutez la dépendance dans pom.xml :</p>
        <pre><code>&lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-security&lt;/artifactId&gt;
    &lt;/dependency&gt;</code></pre>

        <h2>Configuration de la sécurité</h2>
        <pre><code>@Configuration
    @EnableWebSecurity
    public class SecurityConfig {

        @Bean
        public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
            http
                .authorizeRequests()
                    .antMatchers("/public/**").permitAll()
                    .anyRequest().authenticated()
                    .and()
                .formLogin()
                    .and()
                .httpBasic();
            return http.build();
        }

        @Bean
        public PasswordEncoder passwordEncoder() {
            return new BCryptPasswordEncoder();
        }
    }</code></pre>

        <h2>Authentification JWT</h2>
        <pre><code>@Service
    public class JwtService {

        private final String SECRET_KEY = "votre_cle_secrete";

        public String generateToken(UserDetails userDetails) {
            return Jwts.builder()
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60))
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();
        }

        public Boolean validateToken(String token, UserDetails userDetails) {
            final String username = extractUsername(token);
            return (username.equals(userDetails.getUsername()) && !isTokenExpired(token);
        }
    }</code></pre>

        <h2>Sécurisation des endpoints</h2>
        <pre><code>@GetMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public String adminEndpoint() {
        return "Accès admin autorisé";
    }</code></pre>

        <h2>Bonnes pratiques</h2>
        <ul>
          <li>Utilisez toujours HTTPS en production</li>
          <li>Stockez les secrets dans des variables d'environnement</li>
          <li>Mettez à jour régulièrement les dépendances</li>
        </ul>`
    },
    {
      id: 2,
      title: 'Introduction à Spring Boot : Créer votre première application',
      date: '2025-07-10',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'quickstart',
      tags: ['Spring Boot', 'Java', 'Maven', 'Démarrage rapide'],
      excerpt: 'Découvrez comment créer votre première application Spring Boot en quelques étapes simples.',
      content: `<h2>Qu'est-ce que Spring Boot?</h2>
        <p>Spring Boot est un framework basé sur Spring qui permet de créer des applications autonomes et de production rapidement.</p>

        <h2>Création d'un projet</h2>
        <p>Utilisez Spring Initializr (https://start.spring.io) pour générer un projet :</p>
        <ul>
          <li>Sélectionnez <strong>Maven</strong> ou <strong>Gradle</strong></li>
          <li>Choisissez la dernière version de <strong>Java</strong></li>
          <li>Ajoutez les dépendances : <code>Spring Web</code>, <code>Spring Data JPA</code></li>
        </ul>

        <h2>Structure du projet</h2>
        <pre><code>src
    ├── main
    │   ├── java
    │   │   └── com
    │   │       └── example
    │   │           └── demo
    │   │               ├── DemoApplication.java
    │   │               ├── controller
    │   │               ├── service
    │   │               └── repository
    │   └── resources
    │       ├── application.properties
    │       └── static</code></pre>

        <h2>Création d'un contrôleur REST</h2>
        <pre><code>@RestController
    public class HelloController {

        @GetMapping("/")
        public String hello() {
            return "Bonjour, Spring Boot!";
        }
    }</code></pre>

        <h2>Exécution de l'application</h2>
        <pre><code>mvn spring-boot:run
    # OU
    ./mvnw spring-boot:run</code></pre>

        <h2>Conclusion</h2>
        <p>Avec Spring Boot, vous pouvez démarrer un projet en minutes grâce à son auto-configuration et ses starters.</p>`
    },
    {
      id: 3,
      title: 'Les 10 principes SOLID que tout développeur .NET doit connaître',
      date: '2023-06-15',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'architecture',
      tags: ['SOLID', 'C#', 'Architecture', 'Best Practices'],
      excerpt: 'Découvrez comment appliquer les principes SOLID dans vos projets .NET pour créer un code plus maintenable, évolutif et robuste.',
      content: `<h2>Introduction aux principes SOLID</h2>
        <p>Les principes SOLID sont cinq principes de conception orientée objet qui visent à créer des logiciels plus compréhensibles, flexibles et maintenables. Ces principes ont été introduits par Robert C. Martin (Uncle Bob) et sont aujourd'hui considérés comme fondamentaux dans le développement logiciel.</p>

        <h2>1. Single Responsibility Principle (SRP)</h2>
        <p>Chaque classe doit avoir une seule responsabilité. Cela signifie qu'une classe ne doit avoir qu'une seule raison de changer.</p>
        <pre><code>public class OrderProcessor
{
  public void ProcessOrder(Order order)
  {
      // Logique de traitement de commande
  }
}

public class OrderLogger
{
  public void LogOrder(Order order)
  {
      // Logique de journalisation
  }
}</code></pre>

        <h2>2. Open/Closed Principle (OCP)</h2>
        <p>Les entités logicielles doivent être ouvertes à l'extension mais fermées à la modification. Vous devriez pouvoir étendre le comportement d'une classe sans la modifier.</p>

        <h2>3. Liskov Substitution Principle (LSP)</h2>
        <p>Les objets d'un programme doivent être remplaçables par des instances de leurs sous-types sans altérer le fonctionnement du programme.</p>

        <h2>4. Interface Segregation Principle (ISP)</h2>
        <p>Préférez plusieurs interfaces spécifiques plutôt qu'une seule interface générale. Les clients ne devraient pas être forcés de dépendre d'interfaces qu'ils n'utilisent pas.</p>

        <h2>5. Dependency Inversion Principle (DIP)</h2>
        <p>Dépendez d'abstractions, pas d'implémentations concrètes. Les modules de haut niveau ne devraient pas dépendre des modules de bas niveau.</p>

        <h2>Conclusion</h2>
        <p>L'application des principes SOLID dans vos projets .NET vous permettra de créer un code plus robuste et évolutif. Ces principes sont essentiels pour tout développeur .NET qui souhaite progresser dans sa carrière.</p>`
    },
    {
      id: 4,
      title: 'Optimisation des performances dans ASP.NET Core',
      date: '2023-06-08',
      image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'performance',
      tags: ['ASP.NET Core', 'Performance', 'Optimisation', 'C#'],
      excerpt: 'Explorez des techniques avancées pour améliorer les performances de vos applications ASP.NET Core.',
      content: `<h2>Techniques d'optimisation pour ASP.NET Core</h2>
        <p>L'optimisation des performances est cruciale pour toute application web. Dans ASP.NET Core, plusieurs techniques peuvent être mises en œuvre pour améliorer significativement les performances.</p>

        <h2>1. Utilisation du caching</h2>
        <p>Le caching est essentiel pour améliorer les performances. ASP.NET Core offre plusieurs options:</p>
        <ul>
          <li><strong>Caching en mémoire</strong>: Pour les données fréquemment accédées</li>
          <li><strong>Distributed caching</strong>: Pour les applications en cluster</li>
          <li><strong>Response caching</strong>: Pour cacher des réponses HTTP complètes</li>
        </ul>
        <pre><code>services.AddResponseCaching();
services.AddControllers(options =>
{
  options.CacheProfiles.Add("Default30",
      new CacheProfile()
      {
          Duration = 30
      });
});</code></pre>

        <h2>2. Compression des réponses</h2>
        <p>Réduisez la taille des réponses HTTP avec la compression:</p>
        <pre><code>services.AddResponseCompression(options =>
{
  options.Providers.Add<GzipCompressionProvider>();
});</code></pre>

        <h2>3. Optimisation des requêtes EF Core</h2>
        <ul>
          <li>Utilisez <code>AsNoTracking()</code> pour les requêtes en lecture seule</li>
          <li>Évitez les N+1 queries avec <code>Include()</code> et <code>ThenInclude()</code></li>
          <li>Utilisez des projections (<code>Select()</code>) pour ne récupérer que les champs nécessaires</li>
        </ul>

        <h2>4. Minification des ressources</h2>
        <p>Minifiez vos fichiers CSS, JavaScript et HTML pour réduire leur taille et améliorer les temps de chargement.</p>

        <h2>Conclusion</h2>
        <p>En appliquant ces techniques, vous pouvez significativement améliorer les performances de vos applications ASP.NET Core. L'optimisation est un processus continu qui nécessite une surveillance constante et des ajustements réguliers.</p>`
    },
    {
      id: 5,
      title: 'Guide complet des tests unitaires en .NET',
      date: '2023-06-01',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'tests',
      tags: ['Tests unitaires', 'xUnit', 'Moq', 'TDD'],
      excerpt: 'Apprenez à écrire des tests unitaires efficaces pour vos applications .NET.',
      content: `<h2>Introduction aux tests unitaires en .NET</h2>
        <p>Les tests unitaires sont essentiels pour garantir la qualité et la fiabilité de votre code. Dans l'écosystème .NET, plusieurs outils sont disponibles pour vous aider à écrire et exécuter des tests unitaires.</p>

        <h2>1. Choix du framework de test</h2>
        <p>Les principaux frameworks de test pour .NET sont:</p>
        <ul>
          <li><strong>xUnit</strong>: Le framework le plus moderne et largement adopté</li>
          <li><strong>NUnit</strong>: Un framework mature avec de nombreuses fonctionnalités</li>
          <li><strong>MSTest</strong>: Le framework intégré à Visual Studio</li>
        </ul>
        <p>Pour ce guide, nous utiliserons xUnit.</p>

        <h2>2. Structure d'un test unitaire</h2>
        <p>Un test unitaire typique suit le modèle Arrange-Act-Assert:</p>
        <pre><code>[Fact]
public void Add_TwoNumbers_ReturnsSum()
{
  // Arrange
  var calculator = new Calculator();

  // Act
  var result = calculator.Add(3, 5);

  // Assert
  Assert.Equal(8, result);
}</code></pre>

        <h2>3. Utilisation de Moq pour le mocking</h2>
        <p>Moq est une bibliothèque de mocking qui vous permet de simuler des dépendances:</p>
        <pre><code>[Fact]
public void ProcessOrder_ValidOrder_CallsPaymentService()
{
  // Arrange
  var mockPaymentService = new Mock<IPaymentService>();
  var orderProcessor = new OrderProcessor(mockPaymentService.Object);
  var order = new Order();

  // Act
  orderProcessor.ProcessOrder(order);

  // Assert
  mockPaymentService.Verify(s => s.ProcessPayment(order), Times.Once);
}</code></pre>

        <h2>4. Bonnes pratiques</h2>
        <ul>
          <li>Un test ne doit tester qu'une seule chose</li>
          <li>Les tests doivent être rapides et isolés</li>
          <li>Utilisez des noms descriptifs pour vos tests</li>
          <li>Évitez la logique complexe dans vos tests</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Les tests unitaires sont un investissement qui paie à long terme. En suivant ce guide, vous serez en mesure de créer une suite de tests robuste qui protégera votre application contre les régressions.</p>`
    },
    {
      id: 6,
      title: 'Implémentation du pattern CQRS avec MediatR',
      date: '2023-07-12',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'architecture',
      tags: ['CQRS', 'MediatR', 'Clean Architecture', 'ASP.NET Core'],
      excerpt: 'Découvrez comment implémenter efficacement le pattern CQRS dans vos applications .NET avec MediatR.',
      content: `<h2>Comprendre le pattern CQRS</h2>
        <p>CQRS (Command Query Responsibility Segregation) est un pattern architectural qui sépare les opérations de lecture et d'écriture dans une application.</p>

        <h2>1. Configuration de MediatR</h2>
        <pre><code>services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(Assembly.GetExecutingAssembly()));</code></pre>

        <h2>2. Création des commandes</h2>
        <pre><code>public class CreateUserCommand : IRequest&lt;int&gt;
{
  public string Name { get; set; }
  public string Email { get; set; }
}

public class CreateUserCommandHandler : IRequestHandler&lt;CreateUserCommand, int&gt;
{
  public async Task&lt;int&gt; Handle(CreateUserCommand request, CancellationToken cancellationToken)
  {
      // Logique de création d'utilisateur
      return userId;
  }
}</code></pre>

        <h2>3. Création des queries</h2>
        <pre><code>public class GetUserQuery : IRequest&lt;UserDto&gt;
{
  public int Id { get; set; }
}

public class GetUserQueryHandler : IRequestHandler&lt;GetUserQuery, UserDto&gt;
{
  public async Task&lt;UserDto&gt; Handle(GetUserQuery request, CancellationToken cancellationToken)
  {
      // Logique de récupération d'utilisateur
      return userDto;
  }
}</code></pre>

        <h2>4. Avantages dans une Clean Architecture</h2>
        <p>CQRS s'intègre parfaitement avec une Clean Architecture en isolant les préoccupations et en améliorant la maintenabilité.</p>

        <h2>Conclusion</h2>
        <p>L'utilisation de MediatR pour implémenter CQRS simplifie considérablement la structure de vos applications .NET tout en améliorant leur évolutivité.</p>`
    },
    {
      id: 7,
      title: 'Sécuriser vos APIs avec JWT et Identity',
      date: '2023-08-05',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'security',
      tags: ['JWT', 'Identity', 'ASP.NET Core', 'Authentication'],
      excerpt: "Guide complet pour implémenter l'authentification JWT dans vos APIs ASP.NET Core avec Identity.",
      content: `<h2>Configuration de JWT dans ASP.NET Core</h2>
        <pre><code>services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
  .AddJwtBearer(options =&gt;
  {
      options.TokenValidationParameters = new TokenValidationParameters
      {
          ValidateIssuer = true,
          ValidateAudience = true,
          ValidateLifetime = true,
          ValidateIssuerSigningKey = true,
          ValidIssuer = Configuration["Jwt:Issuer"],
          ValidAudience = Configuration["Jwt:Audience"],
          IssuerSigningKey = new SymmetricSecurityKey(
              Encoding.UTF8.GetBytes(Configuration["Jwt:Key"]))
      };
  });</code></pre>

        <h2>Génération de tokens JWT</h2>
        <pre><code>public string GenerateJwtToken(ApplicationUser user)
{
  var claims = new[]
  {
      new Claim(JwtRegisteredClaimNames.Sub, user.Id),
      new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
      new Claim(ClaimTypes.Name, user.UserName)
  };

  var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
  var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
  var expires = DateTime.Now.AddDays(Convert.ToDouble(_config["Jwt:ExpireDays"]));

  var token = new JwtSecurityToken(
      _config["Jwt:Issuer"],
      _config["Jwt:Audience"],
      claims,
      expires: expires,
      signingCredentials: creds
  );

  return new JwtSecurityTokenHandler().WriteToken(token);
}</code></pre>

        <h2>Politiques d'autorisation</h2>
        <pre><code>services.AddAuthorization(options =&gt;
{
  options.AddPolicy("AdminOnly", policy =&gt;
      policy.RequireRole("Admin"));

  options.AddPolicy("PremiumUser", policy =&gt;
      policy.RequireClaim("Subscription", "Premium"));
});</code></pre>

        <h2>Meilleures pratiques</h2>
        <ul>
          <li>Utilisez des tokens de courte durée (15-30 min)</li>
          <li>Implémentez un système de refresh tokens</li>
          <li>Ne stockez jamais de données sensibles dans les tokens</li>
        </ul>`
    },
    {
      id: 8,
      title: 'EF Core : Optimisation des requêtes et migrations',
      date: '2023-09-18',
      image: 'https://images.unsplash.com/photo-1555068172-43f6d9c731b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'entityframework',
      tags: ['EF Core', 'ORM', 'Performance', 'Migrations'],
      excerpt: 'Techniques avancées pour optimiser vos requêtes EF Core et gérer efficacement les migrations.',
      content: `<h2>Optimisation des requêtes EF Core</h2>
        <p>Entity Framework Core est puissant mais nécessite une bonne compréhension pour éviter les pièges de performance.</p>

        <h3>1. Utilisation de AsNoTracking</h3>
        <pre><code>var users = await context.Users
  .AsNoTracking()
  .ToListAsync();</code></pre>

        <h3>2. Projection avec Select</h3>
        <pre><code>var userDtos = await context.Users
  .Select(u =&gt; new UserDto
  {
      Id = u.Id,
      FullName = u.FirstName + " " + u.LastName
  })
  .ToListAsync();</code></pre>

        <h3>3. Chargement explicite vs eager loading</h3>
        <pre><code>// Eager loading
var orders = context.Orders
  .Include(o =&gt; o.Customer)
  .ThenInclude(c =&gt; c.Address)
  .ToList();

// Explicit loading
var order = context.Orders.Find(orderId);
context.Entry(order)
  .Collection(o =&gt; o.Items)
  .Load();</code></pre>

        <h2>Gestion des migrations</h2>
        <pre><code>dotnet ef migrations add InitialCreate
dotnet ef database update
dotnet ef migrations script</code></pre>

        <h2>Conclusion</h2>
        <p>Une utilisation judicieuse d'EF Core peut considérablement améliorer les performances de votre application tout en simplifiant l'accès aux données.</p>`
    },
    {
      id: 9,
      title: 'Microservices avec .NET et Docker',
      date: '2023-10-10',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'microservices',
      tags: ['Microservices', 'Docker', 'Kubernetes', 'Distributed Systems'],
      excerpt: 'Comment concevoir et déployer des microservices .NET avec Docker et Kubernetes.',
      content: `<h2>Architecture de microservices</h2>
        <p>Les microservices permettent de décomposer une application monolithique en services indépendants.</p>

        <h3>1. Création d'un Dockerfile pour .NET</h3>
        <pre><code>FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY . .
RUN dotnet restore
RUN dotnet publish -c release -o /app

FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app
COPY --from=build /app .
ENTRYPOINT ["dotnet", "OrderService.dll"]</code></pre>

        <h3>2. Communication entre services</h3>
        <ul>
          <li>API REST avec HttpClientFactory</li>
          <li>gRPC pour les communications haute performance</li>
          <li>Message brokers (RabbitMQ, Kafka)</li>
        </ul>

        <h3>3. Orchestration avec Kubernetes</h3>
        <pre><code>apiVersion: apps/v1
kind: Deployment
metadata:
  name: order-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: order-service
  template:
    metadata:
      labels:
        app: order-service
    spec:
      containers:
      - name: order-service
        image: registry.example.com/orderservice:1.0
        ports:
        - containerPort: 80</code></pre>

        <h2>Meilleures pratiques</h2>
        <ul>
          <li>Chaque service possède sa propre base de données</li>
          <li>Implémentez le pattern Circuit Breaker</li>
          <li>Utilisez des contrats d'API stricts</li>
        </ul>`
    },
    {
      id: 10,
      title: 'Clean Architecture dans les projets .NET',
      date: '2023-11-05',
      image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'architecture',
      tags: ['Clean Architecture', 'DDD', 'SOLID', 'Separation of Concerns'],
      excerpt: 'Implémentation pratique de la Clean Architecture dans vos applications .NET.',
      content: `<h2>Structure de la Clean Architecture</h2>
        <p>La Clean Architecture organise le code en couches concentriques avec des dépendances strictes.</p>

        <h3>1. Couches principales</h3>
        <ul>
          <li><strong>Domain</strong> : Entités et interfaces de repository</li>
          <li><strong>Application</strong> : Cas d'utilisation, services, DTOs</li>
          <li><strong>Infrastructure</strong> : Implémentations concrètes (EF Core, etc.)</li>
          <li><strong>Presentation</strong> : Controllers, API, UI</li>
        </ul>

        <h3>2. Règles de dépendance</h3>
        <p>Les dépendances doivent toujours pointer vers l'intérieur :</p>
        <pre><code>Presentation -&gt; Application -&gt; Domain
Infrastructure -&gt; Application -&gt; Domain</code></pre>

        <h3>3. Implémentation avec .NET</h3>
        <pre><code>NexaShopify.Core
  ├── Domain
  │   ├── Entities
  │   └── Interfaces
  ├── Application
  │   ├── Services
  │   └── DTOs
  ├── Infrastructure
  │   ├── Data
  │   └── Services
  └── Web
      └── Controllers</code></pre>

        <h2>Avantages</h2>
        <ul>
          <li>Indépendance du framework</li>
          <li>Testabilité accrue</li>
          <li>Maintenabilité à long terme</li>
        </ul>`
    },
    {
      id: 11,
      title: 'Pattern Repository avec EF Core',
      date: '2023-12-15',
      image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'designpatterns',
      tags: ['Repository', 'EF Core', 'Unit of Work', 'Data Access'],
      excerpt: 'Implémentation moderne du pattern Repository avec Entity Framework Core.',
      content: `<h2>Interface générique de repository</h2>
        <pre><code>public interface IRepository&lt;T&gt; where T : class
{
  Task&lt;T&gt; GetByIdAsync(int id);
  Task&lt;IEnumerable&lt;T&gt;&gt; GetAllAsync();
  Task AddAsync(T entity);
  void Update(T entity);
  void Delete(T entity);
  Task SaveChangesAsync();
}</code></pre>

        <h2>Implémentation avec EF Core</h2>
        <pre><code>public class Repository&lt;T&gt; : IRepository&lt;T&gt; where T : class
{
  private readonly DbContext _context;
  private readonly DbSet&lt;T&gt; _dbSet;

  public Repository(DbContext context)
  {
      _context = context;
      _dbSet = context.Set&lt;T&gt;();
  }

  public async Task&lt;T&gt; GetByIdAsync(int id)
  {
      return await _dbSet.FindAsync(id);
  }

  public async Task&lt;IEnumerable&lt;T&gt;&gt; GetAllAsync()
  {
      return await _dbSet.ToListAsync();
  }

  public async Task AddAsync(T entity)
  {
      await _dbSet.AddAsync(entity);
  }

  public void Update(T entity)
  {
      _dbSet.Update(entity);
  }

  public void Delete(T entity)
  {
      _dbSet.Remove(entity);
  }

  public async Task SaveChangesAsync()
  {
      await _context.SaveChangesAsync();
  }
}</code></pre>

        <h2>Unit of Work</h2>
        <pre><code>public interface IUnitOfWork
{
  IRepository&lt;User&gt; Users { get; }
  IRepository&lt;Order&gt; Orders { get; }
  Task CompleteAsync();
}

public class UnitOfWork : IUnitOfWork
{
  private readonly AppDbContext _context;

  public UnitOfWork(AppDbContext context)
  {
      _context = context;
      Users = new Repository&lt;User&gt;(context);
      Orders = new Repository&lt;Order&gt;(context);
  }

  public IRepository&lt;User&gt; Users { get; }
  public IRepository&lt;Order&gt; Orders { get; }

  public async Task CompleteAsync()
  {
      await _context.SaveChangesAsync();
  }
}</code></pre>

        <h2>Utilisation dans les services</h2>
        <pre><code>public class OrderService
{
  private readonly IUnitOfWork _unitOfWork;

  public OrderService(IUnitOfWork unitOfWork)
  {
      _unitOfWork = unitOfWork;
  }

  public async Task CreateOrderAsync(OrderDto orderDto)
  {
      var order = new Order { /* mapping */ };
      await _unitOfWork.Orders.AddAsync(order);
      await _unitOfWork.CompleteAsync();
  }
}</code></pre>`
    },
    {
      id: 12,
      title: 'Logging avancé avec Serilog dans .NET',
      date: '2024-01-20',
      image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'bestpractices',
      tags: ['Logging', 'Serilog', 'Diagnostics', 'Monitoring'],
      excerpt: 'Configuration avancée de Serilog pour une journalisation efficace dans vos applications .NET.',
      content: `<h2>Configuration de Serilog</h2>
        <pre><code>Log.Logger = new LoggerConfiguration()
  .MinimumLevel.Debug()
  .MinimumLevel.Override("Microsoft", LogEventLevel.Warning)
  .Enrich.FromLogContext()
  .WriteTo.Console()
  .WriteTo.File("logs/log-.txt", rollingInterval: RollingInterval.Day)
  .WriteTo.Seq("http://localhost:5341")
  .CreateLogger();

// Dans Program.cs
builder.Host.UseSerilog();</code></pre>

        <h2>Journalisation structurée</h2>
        <pre><code>Log.Information("Processing order {@Order} for {CustomerId}", order, customerId);</code></pre>

        <h2>Enrichissement des logs</h2>
        <pre><code>.Enrich.WithProperty("Application", "NexaShopify")
.Enrich.WithMachineName()
.Enrich.WithEnvironmentUserName()
.Enrich.WithThreadId()</code></pre>

        <h2>Intégration avec Elasticsearch</h2>
        <pre><code>.WriteTo.Elasticsearch(new ElasticsearchSinkOptions(new Uri("http://localhost:9200"))
{
  AutoRegisterTemplate = true,
  IndexFormat = "nexashopify-logs-{0:yyyy.MM}"
}</code></pre>

        <h2>Meilleures pratiques</h2>
        <ul>
          <li>Utilisez différents niveaux de log (Debug, Info, Warning, Error)</li>
          <li>Évitez de logger des données sensibles</li>
          <li>Centralisez la configuration des logs</li>
        </ul>`
    },
    {
      id: 13,
      title: 'Validation avec FluentValidation dans ASP.NET Core',
      date: '2024-02-15',
      image: 'https://images.unsplash.com/photo-1555068172-43f6d9c731b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'bestpractices',
      tags: ['Validation', 'FluentValidation', 'ASP.NET Core', 'Data Integrity'],
      excerpt: 'Comment implémenter une validation robuste avec FluentValidation dans vos API ASP.NET Core.',
      content: `<h2>Installation et configuration</h2>
        <pre><code>services.AddControllers()
  .AddFluentValidation(fv =&gt;
  {
      fv.RegisterValidatorsFromAssemblyContaining&lt;Startup&gt;();
      fv.AutomaticValidationEnabled = true;
  });</code></pre>

        <h2>Création d'un validateur</h2>
        <pre><code>public class CreateUserValidator : AbstractValidator&lt;CreateUserDto&gt;
{
  public CreateUserValidator()
  {
      RuleFor(x =&gt; x.Email)
          .NotEmpty().WithMessage("Email is required")
          .EmailAddress().WithMessage("Invalid email format");

      RuleFor(x =&gt; x.Password)
          .NotEmpty()
          .MinimumLength(8)
          .Matches("[A-Z]").WithMessage("Password must contain at least one uppercase letter")
          .Matches("[a-z]").WithMessage("Password must contain at least one lowercase letter")
          .Matches("[0-9]").WithMessage("Password must contain at least one digit");

      RuleFor(x =&gt; x.ConfirmPassword)
          .Equal(x =&gt; x.Password).WithMessage("Passwords must match");
  }
}</code></pre>

        <h2>Validation dans les controllers</h2>
        <pre><code>[HttpPost]
public async Task&lt;IActionResult&gt; CreateUser([FromBody] CreateUserDto dto)
{
  // La validation est automatiquement exécutée avant d'atteindre cette méthode
  // ...
}</code></pre>

        <h2>Validation custom</h2>
        <pre><code>RuleFor(x =&gt; x.Username)
  .MustAsync(async (username, cancellation) =&gt;
  {
      return !await _userService.UsernameExists(username);
  }).WithMessage("Username already exists");</code></pre>

        <h2>Avantages</h2>
        <ul>
          <li>Séparation des préoccupations</li>
          <li>Règles de validation réutilisables</li>
          <li>Messages d'erreur personnalisés</li>
        </ul>`
    },
    {
      id: 14,
      title: 'Global Exception Handling dans ASP.NET Core',
      date: '2024-03-10',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'bestpractices',
      tags: ['Error Handling', 'Middleware', 'ASP.NET Core', 'Exceptions'],
      excerpt: "Comment implémenter un gestionnaire global d'exceptions pour vos applications ASP.NET Core.",
      content: `<h2>Middleware de gestion des exceptions</h2>
        <pre><code>public class ExceptionMiddleware
{
  private readonly RequestDelegate _next;
  private readonly ILogger&lt;ExceptionMiddleware&gt; _logger;

  public ExceptionMiddleware(RequestDelegate next, ILogger&lt;ExceptionMiddleware&gt; logger)
  {
      _next = next;
      _logger = logger;
  }

  public async Task InvokeAsync(HttpContext context)
  {
      try
      {
          await _next(context);
      }
      catch (Exception ex)
      {
          _logger.LogError(ex, "An unhandled exception occurred");
          await HandleExceptionAsync(context, ex);
      }
  }

  private static Task HandleExceptionAsync(HttpContext context, Exception exception)
  {
      context.Response.ContentType = "application/json";
      context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

      var response = new ErrorResponse
      {
          StatusCode = context.Response.StatusCode,
          Message = "Internal Server Error",
          Details = exception.Message
      };

      if (exception is CustomNotFoundException)
      {
          context.Response.StatusCode = (int)HttpStatusCode.NotFound;
          response.Message = "Resource not found";
      }

      return context.Response.WriteAsync(JsonSerializer.Serialize(response));
  }
}</code></pre>

        <h2>Enregistrement du middleware</h2>
        <pre><code>app.UseMiddleware&lt;ExceptionMiddleware&gt;();</code></pre>

        <h2>Types d'exceptions custom</h2>
        <pre><code>public class CustomNotFoundException : Exception
{
  public CustomNotFoundException() : base() { }
  public CustomNotFoundException(string message) : base(message) { }
}

public class ValidationException : Exception
{
  public IDictionary&lt;string, string[]&gt; Errors { get; }

  public ValidationException() : base("Validation errors occurred")
  {
      Errors = new Dictionary&lt;string, string[]&gt;();
  }

  public ValidationException(IEnumerable&lt;ValidationFailure&gt; failures)
      : this()
  {
      Errors = failures
          .GroupBy(e =&gt; e.PropertyName, e =&gt; e.ErrorMessage)
          .ToDictionary(failureGroup =&gt; failureGroup.Key, failureGroup =&gt; failureGroup.ToArray());
  }
}</code></pre>

        <h2>Avantages</h2>
        <ul>
          <li>Centralisation de la gestion des erreurs</li>
          <li>Réponses d'erreur cohérentes</li>
          <li>Journalisation centralisée</li>
        </ul>`
    },
    {
      id: 15,
      title: 'Background Services avec Hangfire',
      date: '2024-04-05',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'services',
      tags: ['Hangfire', 'Background Jobs', 'Queues', 'Scheduling'],
      excerpt: 'Implémentation de tâches en arrière-plan avec Hangfire dans ASP.NET Core.',
      content: `<h2>Configuration de Hangfire</h2>
        <pre><code>services.AddHangfire(config =&gt;
  config.UseSqlServerStorage(Configuration.GetConnectionString("HangfireConnection")));

services.AddHangfireServer();</code></pre>

        <h2>Types de tâches</h2>

        <h3>Tâches immédiates</h3>
        <pre><code>BackgroundJob.Enqueue(() =&gt; Console.WriteLine("Fire-and-forget job"));</code></pre>

        <h3>Tâches différées</h3>
        <pre><code>BackgroundJob.Schedule(() =&gt; SendWelcomeEmail(userId), TimeSpan.FromMinutes(5));</code></pre>

        <h3>Tâches récurrentes</h3>
        <pre><code>RecurringJob.AddOrUpdate("cleanup-job", () =&gt; CleanupService.Cleanup(), Cron.Daily);</code></pre>

        <h2>Tableau de bord</h2>
        <pre><code>app.UseHangfireDashboard();</code></pre>

        <h2>Meilleures pratiques</h2>
        <ul>
          <li>Utilisez des méthodes idempotentes</li>
          <li>Limitez la durée des tâches</li>
          <li>Implémentez des mécanismes de réessai</li>
        </ul>`
    },
    {
      id: 16,
      title: 'API GraphQL avec HotChocolate dans .NET',
      date: '2024-05-20',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'api',
      tags: ['GraphQL', 'HotChocolate', 'API Design', 'Performance'],
      excerpt: 'Comment construire des APIs GraphQL performantes avec HotChocolate dans .NET.',
      content: `<h2>Configuration de base</h2>
        <pre><code>services
  .AddGraphQLServer()
  .AddQueryType&lt;Query&gt;()
  .AddMutationType&lt;Mutation&gt;()
  .AddProjections()
  .AddFiltering()
  .AddSorting();</code></pre>

        <h2>Définition des types</h2>
        <pre><code>public class UserType : ObjectType&lt;User&gt;
{
  protected override void Configure(IObjectTypeDescriptor&lt;User&gt; descriptor)
  {
      descriptor.Field(u =&gt; u.Id).Type&lt;NonNullType&lt;IdType&gt;&gt;();
      descriptor.Field(u =&gt; u.Name).Type&lt;NonNullType&lt;StringType&gt;&gt;();
      descriptor.Field(u =&gt; u.Email).Type&lt;NonNullType&lt;StringType&gt;&gt;();
  }
}

public class Query
{
  [UsePaging]
  [UseProjection]
  [UseFiltering]
  [UseSorting]
  public IQueryable&lt;User&gt; GetUsers([Service] AppDbContext context)
  {
      return context.Users;
  }
}</code></pre>

        <h2>Mutations</h2>
        <pre><code>public class Mutation
{
  public async Task&lt;User&gt; CreateUser(
      CreateUserInput input,
      [Service] AppDbContext context)
  {
      var user = new User { Name = input.Name, Email = input.Email };
      context.Users.Add(user);
      await context.SaveChangesAsync();
      return user;
  }
}</code></pre>

        <h2>Avantages de GraphQL</h2>
        <ul>
          <li>Réduction du sur-requêtage et du sous-requêtage</li>
          <li>Schéma fortement typé</li>
          <li>Évolution indépendante du frontend et backend</li>
        </ul>`
    },
    {
      id: 17,
      title: 'Blazor Server vs Blazor WebAssembly',
      date: '2024-06-10',
      image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'web',
      tags: ['Blazor', 'WebAssembly', 'SPA', 'ASP.NET Core'],
      excerpt: 'Comparaison détaillée entre Blazor Server et Blazor WebAssembly pour choisir la meilleure solution.',
      content: `<h2>Architecture</h2>

        <h3>Blazor Server</h3>
        <ul>
          <li>Exécution côté serveur</li>
          <li>Communication via SignalR</li>
          <li>Application légère côté client</li>
        </ul>

        <h3>Blazor WebAssembly</h3>
        <ul>
          <li>Exécution dans le navigateur</li>
          <li>Application autonome</li>
          <li>Pas de dépendance serveur après chargement</li>
        </ul>

        <h2>Cas d'utilisation</h2>
        <table>
          <tr>
            <th>Critère</th>
            <th>Blazor Server</th>
            <th>Blazor WebAssembly</th>
          </tr>
          <tr>
            <td>Latence réseau</td>
            <td>⚫ Sensible</td>
            <td>⚪ Peu sensible</td>
          </tr>
          <tr>
            <td>Charge serveur</td>
            <td>⚫ Élevée</td>
            <td>⚪ Faible</td>
          </tr>
          <tr>
            <td>Capacités offline</td>
            <td>⚫ Impossible</td>
            <td>⚪ Possible</td>
          </tr>
          <tr>
            <td>Temps de chargement initial</td>
            <td>⚫ Rapide</td>
            <td>⚪ Lent (premier chargement)</td>
          </tr>
        </table>

        <h2>Quand choisir quoi ?</h2>
        <ul>
          <li><strong>Blazor Server</strong> : Applications internes, faible latence réseau</li>
          <li><strong>Blazor WebAssembly</strong> : Applications publiques, besoin offline, intégration avec CDN</li>
        </ul>`
    },
    {
      id: 18,
      title: 'CI/CD pour applications .NET avec GitHub Actions',
      date: '2024-07-15',
      image: 'https://images.unsplash.com/photo-1555068172-43f6d9c731b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'devops',
      tags: ['CI/CD', 'GitHub Actions', 'DevOps', 'Automation'],
      excerpt: "Mise en place d'un pipeline CI/CD robuste pour vos applications .NET avec GitHub Actions.",
      content: `<h2>Pipeline de base</h2>
        <pre><code>name: .NET CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3
    - name: Setup .NET
      uses: actions/setup-dotnet@v2
      with:
        dotnet-version: '7.0.x'
    - name: Restore dependencies
      run: dotnet restore
    - name: Build
      run: dotnet build --configuration Release --no-restore
    - name: Test
      run: dotnet test --no-build --verbosity normal</code></pre>

        <h2>Déploiement sur Azure</h2>
        <pre><code>- name: 'Deploy to Azure Web App'
  uses: azure/webapps-deploy@v2
  with:
    app-name: 'nexashopify-app'
    slot-name: 'production'
    publish-profile: $"{{ Secrets.AZURE_PUBLISH_PROFILE }}"
    package: '$"{{ github.workspace }}"/publish'</code></pre>

        <h2>Déploiement de conteneurs</h2>
        <pre><code>- name: Build and push Docker image
  uses: docker/build-push-action@v3
  with:
    context: .
    push: true
    tags: |
      ghcr.io/nexashopify/backend:latest
      ghcr.io/nexashopify/backend:$"{{ github.sha }}"</code></pre>

        <h2>Meilleures pratiques</h2>
        <ul>
          <li>Séparez les étapes de build et de déploiement</li>
          <li>Utilisez des secrets pour les informations sensibles</li>
          <li>Implémentez des tests de qualité de code</li>
        </ul>`
    },
    {
      id: 19,
      title: 'Développement piloté par le domaine (DDD) avec .NET',
      date: '2024-08-05',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'architecture',
      tags: ['DDD', 'Domain-Driven Design', 'Tactical Patterns', 'Strategic Design'],
      excerpt: 'Application des principes du Domain-Driven Design dans vos projets .NET.',
      content: `<h2>Concepts fondamentaux du DDD</h2>
        <ul>
          <li><strong>Domain Model</strong> : Représentation du métier</li>
          <li><strong>Ubiquitous Language</strong> : Langage partagé</li>
          <li><strong>Bounded Contexts</strong> : Contextes délimités</li>
        </ul>

        <h2>Patterns tactiques</h2>

        <h3>Entités et Value Objects</h3>
        <pre><code>public class Order : Entity
{
  public int Id { get; private set; }
  public Address ShippingAddress { get; private set; } // Value Object
  // ...
}

public class Address : ValueObject
{
  public string Street { get; }
  public string City { get; }
  public string PostalCode { get; }

  protected override IEnumerable&lt;object&gt; GetEqualityComponents()
  {
      yield return Street;
      yield return City;
      yield return PostalCode;
  }
}</code></pre>

        <h3>Aggregates et Root Entities</h3>
        <pre><code>public class Order : AggregateRoot
{
  private readonly List&lt;OrderItem&gt; _items = new List&lt;OrderItem&gt;();
  public IReadOnlyCollection&lt;OrderItem&gt; Items =&gt; _items.AsReadOnly();

  public void AddItem(Product product, int quantity)
  {
      var existingItem = _items.FirstOrDefault(i =&gt; i.ProductId == product.Id);
      if (existingItem != null)
      {
          existingItem.AddQuantity(quantity);
      }
      else
      {
          _items.Add(new OrderItem(product, quantity));
      }
  }
}</code></pre>

        <h3>Domain Services</h3>
        <pre><code>public class OrderService : IDomainService
{
  public Order CreateDraftOrder(Customer customer)
  {
      // Logique métier complexe
  }
}</code></pre>

        <h2>Avantages</h2>
        <ul>
          <li>Modélisation fidèle au métier</li>
          <li>Code plus expressif</li>
          <li>Meilleure maintenabilité</li>
        </ul>`
    },
    {
      id: 20,
      title: 'ASP.NET Core 8 : Les nouveautés essentielles',
      date: '2024-09-20',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'aspnetcore',
      tags: ['ASP.NET Core 8', 'New Features', 'Performance', 'Minimal APIs'],
      excerpt: "Découverte des fonctionnalités les plus importantes d'ASP.NET Core 8 pour les développeurs.",
      content: `<h2>1. Native AOT pour les APIs</h2>
        <p>Compilation Ahead-Of-Time pour réduire la taille des déploiements et améliorer le démarrage.</p>
        <pre><code>&lt;!-- Dans .csproj --&gt;
&lt;PropertyGroup&gt;
  &lt;PublishAot&gt;true&lt;/PublishAot&gt;
&lt;/PropertyGroup&gt;</code></pre>

        <h2>2. Améliorations des Minimal APIs</h2>
        <pre><code>app.MapGet("/products", async (AppDbContext db) =&gt;
  await db.Products.ToListAsync());

app.MapPost("/products", async (Product product, AppDbContext db) =&gt;
{
  db.Products.Add(product);
  await db.SaveChangesAsync();
  return Results.Created($"/products/{product.Id}", product);
});</code></pre>

        <h2>3. Keyed Services dans l'IoC</h2>
        <pre><code>services.AddKeyedSingleton&lt;ICacheService, RedisCacheService&gt;("redis");
services.AddKeyedSingleton&lt;ICacheService, MemoryCacheService&gt;("memory");

// Résolution
var cacheService = app.Services.GetRequiredKeyedService&lt;ICacheService&gt;("redis");</code></pre>

        <h2>4. Améliorations des performances</h2>
        <ul>
          <li>Réduction de 15% de la mémoire utilisée</li>
          <li>Amélioration de 20% du débit des requêtes</li>
          <li>Optimisation du pipeline HTTP</li>
        </ul>

        <h2>5. Nouveaux helpers pour Blazor</h2>
        <pre><code>&lt;EditForm Model="user" OnValidSubmit="SaveUser"&gt;
  &lt;DataAnnotationsValidator /&gt;
  &lt;ValidationSummary class="text-danger" /&gt;

  &lt;InputText @bind-Value="user.Name" /&gt;
  &lt;ValidationMessage For="() =&gt; user.Name" /&gt;

  &lt;button type="submit"&gt;Save&lt;/button&gt;
&lt;/EditForm&gt;</code></pre>`
    },
    {
      id: 21,
      title: 'Performance tuning des applications .NET',
      date: '2024-10-10',
      image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'performance',
      tags: ['Performance', 'Profiling', 'Optimization', 'Benchmarking'],
      excerpt: 'Techniques avancées pour analyser et optimiser les performances de vos applications .NET.',
      content: `<h2>Outils d'analyse</h2>
        <ul>
          <li>Visual Studio Profiler</li>
          <li>dotTrace et dotMemory</li>
          <li>Application Insights</li>
          <li>BenchmarkDotNet</li>
        </ul>

        <h2>Optimisations courantes</h2>

        <h3>Gestion de la mémoire</h3>
        <pre><code>// Utilisation de Span&lt;T&gt; pour éviter les allocations
public static int CountCommas(ReadOnlySpan&lt;char&gt; text)
{
  int count = 0;
  foreach (char c in text)
  {
      if (c == ',') count++;
  }
  return count;
}</code></pre>

        <h3>Optimisation des collections</h3>
        <pre><code>// Préférer ArrayPool pour les tableaux temporaires
var buffer = ArrayPool&lt;byte&gt;.Shared.Rent(1024);
try
{
  // Utilisation du buffer
}
finally
{
  ArrayPool&lt;byte&gt;.Shared.Return(buffer);
}</code></pre>

        <h3>Async et parallélisme</h3>
        <pre><code>// Utilisation de ValueTask pour éviter les allocations
public ValueTask&lt;int&gt; CalculateAsync()
{
  if (_cachedResult != null)
      return new ValueTask&lt;int&gt;(_cachedResult);

  return new ValueTask&lt;int&gt;(LoadFromDatabaseAsync());
}</code></pre>

        <h2>Meilleures pratiques</h2>
        <ul>
          <li>Évitez les allocations inutiles</li>
          <li>Utilisez des structures plutôt que des classes pour les petits objets</li>
          <li>Limitez l'utilisation de réflexion</li>
        </ul>`
    },
    {
      id: 22,
      title: 'Future du .NET : ASP.NET Core 9 et C# 12',
      date: '2025-01-15',
      image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'future',
      tags: ['ASP.NET Core 9', 'C# 12', 'Innovation', 'Roadmap'],
      excerpt: 'Prévision des fonctionnalités à venir dans ASP.NET Core 9 et C# 12 basée sur la roadmap Microsoft.',
      content: `<h2>ASP.NET Core 9 : Principales orientations</h2>
        <ul>
          <li><strong>Native AOT étendu</strong> : Support complet pour les applications Blazor</li>
          <li><strong>WebAssembly Multi-Threading</strong> : Amélioration des performances</li>
          <li><strong>HTTP/3 par défaut</strong> : Meilleures performances réseau</li>
        </ul>

        <h2>C# 12 : Nouvelles fonctionnalités</h2>

        <h3>Primary Constructors</h3>
        <pre><code>public class User(string name, string email)
{
  public string Name { get; } = name;
  public string Email { get; } = email;
}</code></pre>

        <h3>Extension Everything</h3>
        <pre><code>extension IntExtensions for int
{
  public bool IsEven() =&gt; this % 2 == 0;
}

// Utilisation
if (5.IsEven()) { ... }</code></pre>

        <h3>Pattern Matching amélioré</h3>
        <pre><code>if (user is { Address.City: "Paris", Age: > 18 and < 65 })
{
  // ...
}</code></pre>

        <h2>Autres innovations attendues</h2>
        <ul>
          <li>Meilleur support pour l'IA/ML dans le framework</li>
          <li>Intégration plus poussée avec WebGPU</li>
          <li>Outils de développement améliorés pour le profiling</li>
        </ul>

        <h2>Conclusion</h2>
        <p>L'écosystème .NET continue d'évoluer rapidement, avec un accent particulier sur la performance, la productivité et les applications modernes.</p>`
    }
  ],
  en: [
    {
      id: 1,
      title: 'Secure a Spring Boot Application with Spring Security',
      date: '2025-07-15',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'security',
      tags: ['Spring Security', 'Authentication', 'JWT', 'Spring Boot'],
      excerpt: "Learn how to protect your Spring Boot application by implementing authentication and authorization.",
      content: `<h2>Basic Configuration</h2>
        <p>Add the dependency in pom.xml:</p>
        <pre><code>&lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-security&lt;/artifactId&gt;
    &lt;/dependency&gt;</code></pre>

        <h2>Security Configuration</h2>
        <pre><code>@Configuration
    @EnableWebSecurity
    public class SecurityConfig {

        @Bean
        public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
            http
                .authorizeRequests()
                    .antMatchers("/public/**").permitAll()
                    .anyRequest().authenticated()
                    .and()
                .formLogin()
                    .and()
                .httpBasic();
            return http.build();
        }

        @Bean
        public PasswordEncoder passwordEncoder() {
            return new BCryptPasswordEncoder();
        }
    }</code></pre>

        <h2>JWT Authentication</h2>
        <pre><code>@Service
    public class JwtService {

        private final String SECRET_KEY = "your_secret_key";

        public String generateToken(UserDetails userDetails) {
            return Jwts.builder()
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60))
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();
        }

        public Boolean validateToken(String token, UserDetails userDetails) {
            final String username = extractUsername(token);
            return (username.equals(userDetails.getUsername()) && !isTokenExpired(token);
        }
    }</code></pre>

        <h2>Securing Endpoints</h2>
        <pre><code>@GetMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public String adminEndpoint() {
        return "Admin access granted";
    }</code></pre>

        <h2>Best Practices</h2>
        <ul>
          <li>Always use HTTPS in production</li>
          <li>Store secrets in environment variables</li>
          <li>Regularly update dependencies</li>
        </ul>`
    },
    {
      id: 2,
      title: 'Introduction to Spring Boot: Create Your First Application',
      date: '2025-07-10',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'quickstart',
      tags: ['Spring Boot', 'Java', 'Maven', 'Quick Start'],
      excerpt: 'Discover how to create your first Spring Boot application in a few simple steps.',
      content: `<h2>What is Spring Boot?</h2>
        <p>Spring Boot is a Spring-based framework that allows you to create standalone, production-ready applications quickly.</p>

        <h2>Project Creation</h2>
        <p>Use Spring Initializr (https://start.spring.io) to generate a project:</p>
        <ul>
          <li>Select <strong>Maven</strong> or <strong>Gradle</strong></li>
          <li>Choose the latest <strong>Java</strong> version</li>
          <li>Add dependencies: <code>Spring Web</code>, <code>Spring Data JPA</code></li>
        </ul>

        <h2>Project Structure</h2>
        <pre><code>src
    ├── main
    │   ├── java
    │   │   └── com
    │   │       └── example
    │   │           └── demo
    │   │               ├── DemoApplication.java
    │   │               ├── controller
    │   │               ├── service
    │   │               └── repository
    │   └── resources
    │       ├── application.properties
    │       └── static</code></pre>

        <h2>Creating a REST Controller</h2>
        <pre><code>@RestController
    public class HelloController {

        @GetMapping("/")
        public String hello() {
            return "Hello, Spring Boot!";
        }
    }</code></pre>

        <h2>Running the Application</h2>
        <pre><code>mvn spring-boot:run
    # OR
    ./mvnw spring-boot:run</code></pre>

        <h2>Conclusion</h2>
        <p>With Spring Boot, you can start a project in minutes thanks to its auto-configuration and starters.</p>`
    },
    {
      id: 3,
      title: 'The 10 SOLID Principles Every .NET Developer Should Know',
      date: '2023-06-15',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'architecture',
      tags: ['SOLID', 'C#', 'Architecture', 'Best Practices'],
      excerpt: 'Discover how to apply SOLID principles in your .NET projects to create more maintainable, scalable, and robust code.',
      content: `<h2>Introduction to SOLID Principles</h2>
        <p>The SOLID principles are five object-oriented design principles that aim to create more understandable, flexible, and maintainable software. Introduced by Robert C. Martin (Uncle Bob), these principles are now considered fundamental in software development.</p>

        <h2>1. Single Responsibility Principle (SRP)</h2>
        <p>Each class should have a single responsibility. This means a class should have only one reason to change.</p>
        <pre><code>public class OrderProcessor
{
  public void ProcessOrder(Order order)
  {
      // Order processing logic
  }
}

public class OrderLogger
{
  public void LogOrder(Order order)
  {
      // Logging logic
  }
}</code></pre>

        <h2>2. Open/Closed Principle (OCP)</h2>
        <p>Software entities should be open for extension but closed for modification. You should be able to extend a class's behavior without modifying it.</p>

        <h2>3. Liskov Substitution Principle (LSP)</h2>
        <p>Objects in a program should be replaceable with instances of their subtypes without altering the correctness of the program.</p>

        <h2>4. Interface Segregation Principle (ISP)</h2>
        <p>Prefer specific interfaces over a single general-purpose interface. Clients should not be forced to depend on interfaces they don't use.</p>

        <h2>5. Dependency Inversion Principle (DIP)</h2>
        <p>Depend on abstractions, not concretions. High-level modules should not depend on low-level modules.</p>

        <h2>Conclusion</h2>
        <p>Applying SOLID principles in your .NET projects will help you create more robust and scalable code. These principles are essential for any .NET developer looking to advance their career.</p>`
    },
    {
      id: 4,
      title: 'Performance Optimization in ASP.NET Core',
      date: '2023-06-08',
      image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'performance',
      tags: ['ASP.NET Core', 'Performance', 'Optimization', 'C#'],
      excerpt: 'Explore advanced techniques to improve the performance of your ASP.NET Core applications.',
      content: `<h2>Optimization Techniques for ASP.NET Core</h2>
        <p>Performance optimization is crucial for any web application. In ASP.NET Core, several techniques can significantly improve performance.</p>

        <h2>1. Using Caching</h2>
        <p>Caching is essential for performance. ASP.NET Core offers several options:</p>
        <ul>
          <li><strong>In-Memory Caching</strong>: For frequently accessed data</li>
          <li><strong>Distributed Caching</strong>: For clustered applications</li>
          <li><strong>Response Caching</strong>: To cache complete HTTP responses</li>
        </ul>
        <pre><code>services.AddResponseCaching();
services.AddControllers(options =>
{
  options.CacheProfiles.Add("Default30",
      new CacheProfile()
      {
          Duration = 30
      });
});</code></pre>

        <h2>2. Response Compression</h2>
        <p>Reduce HTTP response size with compression:</p>
        <pre><code>services.AddResponseCompression(options =>
{
  options.Providers.Add&lt;GzipCompressionProvider&gt;();
});</code></pre>

        <h2>3. EF Core Query Optimization</h2>
        <ul>
          <li>Use <code>AsNoTracking()</code> for read-only queries</li>
          <li>Avoid N+1 queries with <code>Include()</code> and <code>ThenInclude()</code></li>
          <li>Use projections (<code>Select()</code>) to fetch only necessary fields</li>
        </ul>

        <h2>4. Resource Minification</h2>
        <p>Minify your CSS, JavaScript, and HTML files to reduce their size and improve load times.</p>

        <h2>Conclusion</h2>
        <p>By applying these techniques, you can significantly improve the performance of your ASP.NET Core applications. Optimization is an ongoing process that requires constant monitoring and regular adjustments.</p>`
    },
    {
      id: 5,
      title: 'Complete Guide to Unit Testing in .NET',
      date: '2023-06-01',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'tests',
      tags: ['Unit Testing', 'xUnit', 'Moq', 'TDD'],
      excerpt: 'Learn how to write effective unit tests for your .NET applications.',
      content: `<h2>Introduction to Unit Testing in .NET</h2>
        <p>Unit tests are essential for ensuring code quality and reliability. In the .NET ecosystem, several tools are available to help you write and run unit tests.</p>

        <h2>1. Choosing a Test Framework</h2>
        <p>The main test frameworks for .NET are:</p>
        <ul>
          <li><strong>xUnit</strong>: The most modern and widely adopted framework</li>
          <li><strong>NUnit</strong>: A mature framework with many features</li>
          <li><strong>MSTest</strong>: The framework built into Visual Studio</li>
        </ul>
        <p>For this guide, we'll use xUnit.</p>

        <h2>2. Structure of a Unit Test</h2>
        <p>A typical unit test follows the Arrange-Act-Assert pattern:</p>
        <pre><code>[Fact]
public void Add_TwoNumbers_ReturnsSum()
{
  // Arrange
  var calculator = new Calculator();

  // Act
  var result = calculator.Add(3, 5);

  // Assert
  Assert.Equal(8, result);
}</code></pre>

        <h2>3. Using Moq for Mocking</h2>
        <p>Moq is a mocking library that allows you to simulate dependencies:</p>
        <pre><code>[Fact]
public void ProcessOrder_ValidOrder_CallsPaymentService()
{
  // Arrange
  var mockPaymentService = new Mock&lt;IPaymentService&gt;();
  var orderProcessor = new OrderProcessor(mockPaymentService.Object);
  var order = new Order();

  // Act
  orderProcessor.ProcessOrder(order);

  // Assert
  mockPaymentService.Verify(s =&gt; s.ProcessPayment(order), Times.Once);
}</code></pre>

        <h2>4. Best Practices</h2>
        <ul>
          <li>A test should test only one thing</li>
          <li>Tests should be fast and isolated</li>
          <li>Use descriptive names for your tests</li>
          <li>Avoid complex logic in tests</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Unit testing is an investment that pays off in the long run. By following this guide, you'll be able to create a robust test suite that protects your application against regressions.</p>`
    },
    {
      id: 6,
      title: 'Implementing the CQRS Pattern with MediatR',
      date: '2023-07-12',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'architecture',
      tags: ['CQRS', 'MediatR', 'Clean Architecture', 'ASP.NET Core'],
      excerpt: 'Learn how to effectively implement the CQRS pattern in your .NET applications with MediatR.',
      content: `<h2>Understanding the CQRS Pattern</h2>
        <p>CQRS (Command Query Responsibility Segregation) is an architectural pattern that separates read and write operations in an application.</p>

        <h2>1. Configuring MediatR</h2>
        <pre><code>services.AddMediatR(cfg =&gt; cfg.RegisterServicesFromAssembly(Assembly.GetExecutingAssembly()));</code></pre>

        <h2>2. Creating Commands</h2>
        <pre><code>public class CreateUserCommand : IRequest&lt;int&gt;
{
  public string Name { get; set; }
  public string Email { get; set; }
}

public class CreateUserCommandHandler : IRequestHandler&lt;CreateUserCommand, int&gt;
{
  public async Task&lt;int&gt; Handle(CreateUserCommand request, CancellationToken cancellationToken)
  {
      // User creation logic
      return userId;
  }
}</code></pre>

        <h2>3. Creating Queries</h2>
        <pre><code>public class GetUserQuery : IRequest&lt;UserDto&gt;
{
  public int Id { get; set; }
}

public class GetUserQueryHandler : IRequestHandler&lt;GetUserQuery, UserDto&gt;
{
  public async Task&lt;UserDto&gt; Handle(GetUserQuery request, CancellationToken cancellationToken)
  {
      // User retrieval logic
      return userDto;
  }
}</code></pre>

        <h2>4. Advantages in Clean Architecture</h2>
        <p>CQRS integrates perfectly with Clean Architecture by isolating concerns and improving maintainability.</p>

        <h2>Conclusion</h2>
        <p>Using MediatR to implement CQRS significantly simplifies the structure of your .NET applications while improving their scalability.</p>`
    },
    {
      id: 7,
      title: 'Securing Your APIs with JWT and Identity',
      date: '2023-08-05',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'security',
      tags: ['JWT', 'Identity', 'ASP.NET Core', 'Authentication'],
      excerpt: "Complete guide to implementing JWT authentication in your ASP.NET Core APIs with Identity.",
      content: `<h2>Configuring JWT in ASP.NET Core</h2>
        <pre><code>services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
  .AddJwtBearer(options =&gt;
  {
      options.TokenValidationParameters = new TokenValidationParameters
      {
          ValidateIssuer = true,
          ValidateAudience = true,
          ValidateLifetime = true,
          ValidateIssuerSigningKey = true,
          ValidIssuer = Configuration["Jwt:Issuer"],
          ValidAudience = Configuration["Jwt:Audience"],
          IssuerSigningKey = new SymmetricSecurityKey(
              Encoding.UTF8.GetBytes(Configuration["Jwt:Key"]))
      };
  });</code></pre>

        <h2>Generating JWT Tokens</h2>
        <pre><code>public string GenerateJwtToken(ApplicationUser user)
{
  var claims = new[]
  {
      new Claim(JwtRegisteredClaimNames.Sub, user.Id),
      new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
      new Claim(ClaimTypes.Name, user.UserName)
  };

  var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
  var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
  var expires = DateTime.Now.AddDays(Convert.ToDouble(_config["Jwt:ExpireDays"]));

  var token = new JwtSecurityToken(
      _config["Jwt:Issuer"],
      _config["Jwt:Audience"],
      claims,
      expires: expires,
      signingCredentials: creds
  );

  return new JwtSecurityTokenHandler().WriteToken(token);
}</code></pre>

        <h2>Authorization Policies</h2>
        <pre><code>services.AddAuthorization(options =&gt;
{
  options.AddPolicy("AdminOnly", policy =&gt;
      policy.RequireRole("Admin"));

  options.AddPolicy("PremiumUser", policy =&gt;
      policy.RequireClaim("Subscription", "Premium"));
});</code></pre>

        <h2>Best Practices</h2>
        <ul>
          <li>Use short-lived tokens (15-30 min)</li>
          <li>Implement a refresh token system</li>
          <li>Never store sensitive data in tokens</li>
        </ul>`
    },
    {
      id: 8,
      title: 'EF Core: Query Optimization and Migrations',
      date: '2023-09-18',
      image: 'https://images.unsplash.com/photo-1555068172-43f6d9c731b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'entityframework',
      tags: ['EF Core', 'ORM', 'Performance', 'Migrations'],
      excerpt: 'Advanced techniques to optimize your EF Core queries and manage migrations effectively.',
      content: `<h2>EF Core Query Optimization</h2>
        <p>Entity Framework Core is powerful but requires good understanding to avoid performance pitfalls.</p>

        <h3>1. Using AsNoTracking</h3>
        <pre><code>var users = await context.Users
  .AsNoTracking()
  .ToListAsync();</code></pre>

        <h3>2. Projection with Select</h3>
        <pre><code>var userDtos = await context.Users
  .Select(u =&gt; new UserDto
  {
      Id = u.Id,
      FullName = u.FirstName + " " + u.LastName
  })
  .ToListAsync();</code></pre>

        <h3>3. Explicit Loading vs Eager Loading</h3>
        <pre><code>// Eager loading
var orders = context.Orders
  .Include(o =&gt; o.Customer)
  .ThenInclude(c =&gt; c.Address)
  .ToList();

// Explicit loading
var order = context.Orders.Find(orderId);
context.Entry(order)
  .Collection(o =&gt; o.Items)
  .Load();</code></pre>

        <h2>Managing Migrations</h2>
        <pre><code>dotnet ef migrations add InitialCreate
dotnet ef database update
dotnet ef migrations script</code></pre>

        <h2>Conclusion</h2>
        <p>Judicious use of EF Core can significantly improve your application's performance while simplifying data access.</p>`
    },
    {
      id: 9,
      title: 'Microservices with .NET and Docker',
      date: '2023-10-10',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'microservices',
      tags: ['Microservices', 'Docker', 'Kubernetes', 'Distributed Systems'],
      excerpt: 'How to design and deploy .NET microservices with Docker and Kubernetes.',
      content: `<h2>Microservices Architecture</h2>
        <p>Microservices allow decomposing a monolithic application into independent services.</p>

        <h3>1. Creating a Dockerfile for .NET</h3>
        <pre><code>FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY . .
RUN dotnet restore
RUN dotnet publish -c release -o /app

FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app
COPY --from=build /app .
ENTRYPOINT ["dotnet", "OrderService.dll"]</code></pre>

        <h3>2. Service Communication</h3>
        <ul>
          <li>REST APIs with HttpClientFactory</li>
          <li>gRPC for high-performance communications</li>
          <li>Message brokers (RabbitMQ, Kafka)</li>
        </ul>

        <h3>3. Orchestration with Kubernetes</h3>
        <pre><code>apiVersion: apps/v1
kind: Deployment
metadata:
  name: order-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: order-service
  template:
    metadata:
      labels:
        app: order-service
    spec:
      containers:
      - name: order-service
        image: registry.example.com/orderservice:1.0
        ports:
        - containerPort: 80</code></pre>

        <h2>Best Practices</h2>
        <ul>
          <li>Each service has its own database</li>
          <li>Implement the Circuit Breaker pattern</li>
          <li>Use strict API contracts</li>
        </ul>`
    },
    {
      id: 10,
      title: 'Clean Architecture in .NET Projects',
      date: '2023-11-05',
      image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'architecture',
      tags: ['Clean Architecture', 'DDD', 'SOLID', 'Separation of Concerns'],
      excerpt: 'Practical implementation of Clean Architecture in your .NET applications.',
      content: `<h2>Clean Architecture Structure</h2>
        <p>Clean Architecture organizes code into concentric layers with strict dependencies.</p>

        <h3>1. Core Layers</h3>
        <ul>
          <li><strong>Domain</strong>: Entities and repository interfaces</li>
          <li><strong>Application</strong>: Use cases, services, DTOs</li>
          <li><strong>Infrastructure</strong>: Concrete implementations (EF Core, etc.)</li>
          <li><strong>Presentation</strong>: Controllers, API, UI</li>
        </ul>

        <h3>2. Dependency Rules</h3>
        <p>Dependencies should always point inward:</p>
        <pre><code>Presentation -&gt; Application -&gt; Domain
Infrastructure -&gt; Application -&gt; Domain</code></pre>

        <h3>3. Implementation with .NET</h3>
        <pre><code>NexaShopify.Core
  ├── Domain
  │   ├── Entities
  │   └── Interfaces
  ├── Application
  │   ├── Services
  │   └── DTOs
  ├── Infrastructure
  │   ├── Data
  │   └── Services
  └── Web
      └── Controllers</code></pre>

        <h2>Benefits</h2>
        <ul>
          <li>Framework independence</li>
          <li>Increased testability</li>
          <li>Long-term maintainability</li>
        </ul>`
    },
    {
      id: 11,
      title: 'Repository Pattern with EF Core',
      date: '2023-12-15',
      image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'designpatterns',
      tags: ['Repository', 'EF Core', 'Unit of Work', 'Data Access'],
      excerpt: 'Modern implementation of the Repository pattern with Entity Framework Core.',
      content: `<h2>Generic Repository Interface</h2>
        <pre><code>public interface IRepository&lt;T&gt; where T : class
{
  Task&lt;T&gt; GetByIdAsync(int id);
  Task&lt;IEnumerable&lt;T&gt;&gt; GetAllAsync();
  Task AddAsync(T entity);
  void Update(T entity);
  void Delete(T entity);
  Task SaveChangesAsync();
}</code></pre>

        <h2>Implementation with EF Core</h2>
        <pre><code>public class Repository&lt;T&gt; : IRepository&lt;T&gt; where T : class
{
  private readonly DbContext _context;
  private readonly DbSet&lt;T&gt; _dbSet;

  public Repository(DbContext context)
  {
      _context = context;
      _dbSet = context.Set&lt;T&gt;();
  }

  public async Task&lt;T&gt; GetByIdAsync(int id)
  {
      return await _dbSet.FindAsync(id);
  }

  public async Task&lt;IEnumerable&lt;T&gt;&gt; GetAllAsync()
  {
      return await _dbSet.ToListAsync();
  }

  public async Task AddAsync(T entity)
  {
      await _dbSet.AddAsync(entity);
  }

  public void Update(T entity)
  {
      _dbSet.Update(entity);
  }

  public void Delete(T entity)
  {
      _dbSet.Remove(entity);
  }

  public async Task SaveChangesAsync()
  {
      await _context.SaveChangesAsync();
  }
}</code></pre>

        <h2>Unit of Work</h2>
        <pre><code>public interface IUnitOfWork
{
  IRepository&lt;User&gt; Users { get; }
  IRepository&lt;Order&gt; Orders { get; }
  Task CompleteAsync();
}

public class UnitOfWork : IUnitOfWork
{
  private readonly AppDbContext _context;

  public UnitOfWork(AppDbContext context)
  {
      _context = context;
      Users = new Repository&lt;User&gt;(context);
      Orders = new Repository&lt;Order&gt;(context);
  }

  public IRepository&lt;User&gt; Users { get; }
  public IRepository&lt;Order&gt; Orders { get; }

  public async Task CompleteAsync()
  {
      await _context.SaveChangesAsync();
  }
}</code></pre>

        <h2>Usage in Services</h2>
        <pre><code>public class OrderService
{
  private readonly IUnitOfWork _unitOfWork;

  public OrderService(IUnitOfWork unitOfWork)
  {
      _unitOfWork = unitOfWork;
  }

  public async Task CreateOrderAsync(OrderDto orderDto)
  {
      var order = new Order { /* mapping */ };
      await _unitOfWork.Orders.AddAsync(order);
      await _unitOfWork.CompleteAsync();
  }
}</code></pre>`
    },
    {
      id: 12,
      title: 'Advanced Logging with Serilog in .NET',
      date: '2024-01-20',
      image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'bestpractices',
      tags: ['Logging', 'Serilog', 'Diagnostics', 'Monitoring'],
      excerpt: 'Advanced Serilog configuration for effective logging in your .NET applications.',
      content: `<h2>Configuring Serilog</h2>
        <pre><code>Log.Logger = new LoggerConfiguration()
  .MinimumLevel.Debug()
  .MinimumLevel.Override("Microsoft", LogEventLevel.Warning)
  .Enrich.FromLogContext()
  .WriteTo.Console()
  .WriteTo.File("logs/log-.txt", rollingInterval: RollingInterval.Day)
  .WriteTo.Seq("http://localhost:5341")
  .CreateLogger();

// In Program.cs
builder.Host.UseSerilog();</code></pre>

        <h2>Structured Logging</h2>
        <pre><code>Log.Information("Processing order {@Order} for {CustomerId}", order, customerId);</code></pre>

        <h2>Log Enrichment</h2>
        <pre><code>.Enrich.WithProperty("Application", "NexaShopify")
.Enrich.WithMachineName()
.Enrich.WithEnvironmentUserName()
.Enrich.WithThreadId()</code></pre>

        <h2>Integration with Elasticsearch</h2>
        <pre><code>.WriteTo.Elasticsearch(new ElasticsearchSinkOptions(new Uri("http://localhost:9200"))
{
  AutoRegisterTemplate = true,
  IndexFormat = "nexashopify-logs-{0:yyyy.MM}"
}</code></pre>

        <h2>Best Practices</h2>
        <ul>
          <li>Use different log levels (Debug, Info, Warning, Error)</li>
          <li>Avoid logging sensitive data</li>
          <li>Centralize log configuration</li>
        </ul>`
    },
    {
      id: 13,
      title: 'Validation with FluentValidation in ASP.NET Core',
      date: '2024-02-15',
      image: 'https://images.unsplash.com/photo-1555068172-43f6d9c731b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'bestpractices',
      tags: ['Validation', 'FluentValidation', 'ASP.NET Core', 'Data Integrity'],
      excerpt: 'How to implement robust validation with FluentValidation in your ASP.NET Core APIs.',
      content: `<h2>Installation and Configuration</h2>
        <pre><code>services.AddControllers()
  .AddFluentValidation(fv =&gt;
  {
      fv.RegisterValidatorsFromAssemblyContaining&lt;Startup&gt;();
      fv.AutomaticValidationEnabled = true;
  });</code></pre>

        <h2>Creating a Validator</h2>
        <pre><code>public class CreateUserValidator : AbstractValidator&lt;CreateUserDto&gt;
{
  public CreateUserValidator()
  {
      RuleFor(x =&gt; x.Email)
          .NotEmpty().WithMessage("Email is required")
          .EmailAddress().WithMessage("Invalid email format");

      RuleFor(x =&gt; x.Password)
          .NotEmpty()
          .MinimumLength(8)
          .Matches("[A-Z]").WithMessage("Password must contain at least one uppercase letter")
          .Matches("[a-z]").WithMessage("Password must contain at least one lowercase letter")
          .Matches("[0-9]").WithMessage("Password must contain at least one digit");

      RuleFor(x =&gt; x.ConfirmPassword)
          .Equal(x =&gt; x.Password).WithMessage("Passwords must match");
  }
}</code></pre>

        <h2>Validation in Controllers</h2>
        <pre><code>[HttpPost]
public async Task&lt;IActionResult&gt; CreateUser([FromBody] CreateUserDto dto)
{
  // Validation is automatically executed before reaching this method
  // ...
}</code></pre>

        <h2>Custom Validation</h2>
        <pre><code>RuleFor(x =&gt; x.Username)
  .MustAsync(async (username, cancellation) =&gt;
  {
      return !await _userService.UsernameExists(username);
  }).WithMessage("Username already exists");</code></pre>

        <h2>Advantages</h2>
        <ul>
          <li>Separation of concerns</li>
          <li>Reusable validation rules</li>
          <li>Custom error messages</li>
        </ul>`
    },
    {
      id: 14,
      title: 'Global Exception Handling in ASP.NET Core',
      date: '2024-03-10',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'bestpractices',
      tags: ['Error Handling', 'Middleware', 'ASP.NET Core', 'Exceptions'],
      excerpt: 'How to implement a global exception handler for your ASP.NET Core applications.',
      content: `<h2>Exception Handling Middleware</h2>
        <pre><code>public class ExceptionMiddleware
{
  private readonly RequestDelegate _next;
  private readonly ILogger&lt;ExceptionMiddleware&gt; _logger;

  public ExceptionMiddleware(RequestDelegate next, ILogger&lt;ExceptionMiddleware&gt; logger)
  {
      _next = next;
      _logger = logger;
  }

  public async Task InvokeAsync(HttpContext context)
  {
      try
      {
          await _next(context);
      }
      catch (Exception ex)
      {
          _logger.LogError(ex, "An unhandled exception occurred");
          await HandleExceptionAsync(context, ex);
      }
  }

  private static Task HandleExceptionAsync(HttpContext context, Exception exception)
  {
      context.Response.ContentType = "application/json";
      context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

      var response = new ErrorResponse
      {
          StatusCode = context.Response.StatusCode,
          Message = "Internal Server Error",
          Details = exception.Message
      };

      if (exception is CustomNotFoundException)
      {
          context.Response.StatusCode = (int)HttpStatusCode.NotFound;
          response.Message = "Resource not found";
      }

      return context.Response.WriteAsync(JsonSerializer.Serialize(response));
  }
}</code></pre>

        <h2>Registering the Middleware</h2>
        <pre><code>app.UseMiddleware&lt;ExceptionMiddleware&gt;();</code></pre>

        <h2>Custom Exception Types</h2>
        <pre><code>public class CustomNotFoundException : Exception
{
  public CustomNotFoundException() : base() { }
  public CustomNotFoundException(string message) : base(message) { }
}

public class ValidationException : Exception
{
  public IDictionary&lt;string, string[]&gt; Errors { get; }

  public ValidationException() : base("Validation errors occurred")
  {
      Errors = new Dictionary&lt;string, string[]&gt;();
  }

  public ValidationException(IEnumerable&lt;ValidationFailure&gt; failures)
      : this()
  {
      Errors = failures
          .GroupBy(e =&gt; e.PropertyName, e =&gt; e.ErrorMessage)
          .ToDictionary(failureGroup =&gt; failureGroup.Key, failureGroup =&gt; failureGroup.ToArray());
  }
}</code></pre>

        <h2>Benefits</h2>
        <ul>
          <li>Centralized error handling</li>
          <li>Consistent error responses</li>
          <li>Centralized logging</li>
        </ul>`
    },
    {
      id: 15,
      title: 'Background Services with Hangfire',
      date: '2024-04-05',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'services',
      tags: ['Hangfire', 'Background Jobs', 'Queues', 'Scheduling'],
      excerpt: 'Implementing background tasks with Hangfire in ASP.NET Core.',
      content: `<h2>Configuring Hangfire</h2>
        <pre><code>services.AddHangfire(config =&gt;
  config.UseSqlServerStorage(Configuration.GetConnectionString("HangfireConnection")));

services.AddHangfireServer();</code></pre>

        <h2>Types of Jobs</h2>

        <h3>Fire-and-Forget Jobs</h3>
        <pre><code>BackgroundJob.Enqueue(() =&gt; Console.WriteLine("Fire-and-forget job"));</code></pre>

        <h3>Delayed Jobs</h3>
        <pre><code>BackgroundJob.Schedule(() =&gt; SendWelcomeEmail(userId), TimeSpan.FromMinutes(5));</code></pre>

        <h3>Recurring Jobs</h3>
        <pre><code>RecurringJob.AddOrUpdate("cleanup-job", () =&gt; CleanupService.Cleanup(), Cron.Daily);</code></pre>

        <h2>Dashboard</h2>
        <pre><code>app.UseHangfireDashboard();</code></pre>

        <h2>Best Practices</h2>
        <ul>
          <li>Use idempotent methods</li>
          <li>Limit task duration</li>
          <li>Implement retry mechanisms</li>
        </ul>`
    },
    {
      id: 16,
      title: 'GraphQL API with HotChocolate in .NET',
      date: '2024-05-20',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'api',
      tags: ['GraphQL', 'HotChocolate', 'API Design', 'Performance'],
      excerpt: 'How to build performant GraphQL APIs with HotChocolate in .NET.',
      content: `<h2>Basic Configuration</h2>
        <pre><code>services
  .AddGraphQLServer()
  .AddQueryType&lt;Query&gt;()
  .AddMutationType&lt;Mutation&gt;()
  .AddProjections()
  .AddFiltering()
  .AddSorting();</code></pre>

        <h2>Defining Types</h2>
        <pre><code>public class UserType : ObjectType&lt;User&gt;
{
  protected override void Configure(IObjectTypeDescriptor&lt;User&gt; descriptor)
  {
      descriptor.Field(u =&gt; u.Id).Type&lt;NonNullType&lt;IdType&gt;&gt;();
      descriptor.Field(u =&gt; u.Name).Type&lt;NonNullType&lt;StringType&gt;&gt;();
      descriptor.Field(u =&gt; u.Email).Type&lt;NonNullType&lt;StringType&gt;&gt;();
  }
}

public class Query
{
  [UsePaging]
  [UseProjection]
  [UseFiltering]
  [UseSorting]
  public IQueryable&lt;User&gt; GetUsers([Service] AppDbContext context)
  {
      return context.Users;
  }
}</code></pre>

        <h2>Mutations</h2>
        <pre><code>public class Mutation
{
  public async Task&lt;User&gt; CreateUser(
      CreateUserInput input,
      [Service] AppDbContext context)
  {
      var user = new User { Name = input.Name, Email = input.Email };
      context.Users.Add(user);
      await context.SaveChangesAsync();
      return user;
  }
}</code></pre>

        <h2>Benefits of GraphQL</h2>
        <ul>
          <li>Reduces over-fetching and under-fetching</li>
          <li>Strongly typed schema</li>
          <li>Independent evolution of frontend and backend</li>
        </ul>`
    },
    {
      id: 17,
      title: 'Blazor Server vs Blazor WebAssembly',
      date: '2024-06-10',
      image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'web',
      tags: ['Blazor', 'WebAssembly', 'SPA', 'ASP.NET Core'],
      excerpt: 'Detailed comparison between Blazor Server and Blazor WebAssembly to choose the best solution.',
      content: `<h2>Architecture</h2>

        <h3>Blazor Server</h3>
        <ul>
          <li>Server-side execution</li>
          <li>Communication via SignalR</li>
          <li>Lightweight client application</li>
        </ul>

        <h3>Blazor WebAssembly</h3>
        <ul>
          <li>Execution in the browser</li>
          <li>Standalone application</li>
          <li>No server dependency after loading</li>
        </ul>

        <h2>Use Cases</h2>
        <table>
          <tr>
            <th>Criterion</th>
            <th>Blazor Server</th>
            <th>Blazor WebAssembly</th>
          </tr>
          <tr>
            <td>Network latency</td>
            <td>⚫ Sensitive</td>
            <td>⚪ Less sensitive</td>
          </tr>
          <tr>
            <td>Server load</td>
            <td>⚫ High</td>
            <td>⚪ Low</td>
          </tr>
          <tr>
            <td>Offline capabilities</td>
            <td>⚫ Impossible</td>
            <td>⚪ Possible</td>
          </tr>
          <tr>
            <td>Initial loading time</td>
            <td>⚫ Fast</td>
            <td>⚪ Slow (first load)</td>
          </tr>
        </table>

        <h2>When to Choose What?</h2>
        <ul>
          <li><strong>Blazor Server</strong>: Internal applications, low network latency</li>
          <li><strong>Blazor WebAssembly</strong>: Public applications, offline needs, CDN integration</li>
        </ul>`
    },
    {
      id: 18,
      title: 'CI/CD for .NET Applications with GitHub Actions',
      date: '2024-07-15',
      image: 'https://images.unsplash.com/photo-1555068172-43f6d9c731b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'devops',
      tags: ['CI/CD', 'GitHub Actions', 'DevOps', 'Automation'],
      excerpt: 'Setting up a robust CI/CD pipeline for your .NET applications with GitHub Actions.',
      content: `<h2>Basic Pipeline</h2>
        <pre><code>name: .NET CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3
    - name: Setup .NET
      uses: actions/setup-dotnet@v2
      with:
        dotnet-version: '7.0.x'
    - name: Restore dependencies
      run: dotnet restore
    - name: Build
      run: dotnet build --configuration Release --no-restore
    - name: Test
      run: dotnet test --no-build --verbosity normal</code></pre>

        <h2>Deployment to Azure</h2>
        <pre><code>- name: 'Deploy to Azure Web App'
  uses: azure/webapps-deploy@v2
  with:
    app-name: 'nexashopify-app'
    slot-name: 'production'
    publish-profile: $"{{ secrets.AZURE_PUBLISH_PROFILE }}"
    package: '$"{{ github.workspace }}"/publish'</code></pre>

        <h2>Container Deployment</h2>
        <pre><code>- name: Build and push Docker image
  uses: docker/build-push-action@v3
  with:
    context: .
    push: true
    tags: |
      ghcr.io/nexashopify/backend:latest
      ghcr.io/nexashopify/backend:$"{{ github.sha }}"</code></pre>

        <h2>Best Practices</h2>
        <ul>
          <li>Separate build and deployment steps</li>
          <li>Use secrets for sensitive information</li>
          <li>Implement code quality tests</li>
        </ul>`
    },
    {
      id: 19,
      title: 'Domain-Driven Development (DDD) with .NET',
      date: '2024-08-05',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'architecture',
      tags: ['DDD', 'Domain-Driven Design', 'Tactical Patterns', 'Strategic Design'],
      excerpt: 'Applying Domain-Driven Design principles in your .NET projects.',
      content: `<h2>Core Concepts of DDD</h2>
        <ul>
          <li><strong>Domain Model</strong>: Business representation</li>
          <li><strong>Ubiquitous Language</strong>: Shared language</li>
          <li><strong>Bounded Contexts</strong>: Delimited contexts</li>
        </ul>

        <h2>Tactical Patterns</h2>

        <h3>Entities and Value Objects</h3>
        <pre><code>public class Order : Entity
{
  public int Id { get; private set; }
  public Address ShippingAddress { get; private set; } // Value Object
  // ...
}

public class Address : ValueObject
{
  public string Street { get; }
  public string City { get; }
  public string PostalCode { get; }

  protected override IEnumerable&lt;object&gt; GetEqualityComponents()
  {
      yield return Street;
      yield return City;
      yield return PostalCode;
  }
}</code></pre>

        <h3>Aggregates and Root Entities</h3>
        <pre><code>public class Order : AggregateRoot
{
  private readonly List&lt;OrderItem&gt; _items = new List&lt;OrderItem&gt;();
  public IReadOnlyCollection&lt;OrderItem&gt; Items =&gt; _items.AsReadOnly();

  public void AddItem(Product product, int quantity)
  {
      var existingItem = _items.FirstOrDefault(i =&gt; i.ProductId == product.Id);
      if (existingItem != null)
      {
          existingItem.AddQuantity(quantity);
      }
      else
      {
          _items.Add(new OrderItem(product, quantity));
      }
  }
}</code></pre>

        <h3>Domain Services</h3>
        <pre><code>public class OrderService : IDomainService
{
  public Order CreateDraftOrder(Customer customer)
  {
      // Complex business logic
  }
}</code></pre>

        <h2>Benefits</h2>
        <ul>
          <li>Faithful business modeling</li>
          <li>More expressive code</li>
          <li>Better maintainability</li>
        </ul>`
    },
    {
      id: 20,
      title: 'ASP.NET Core 8: Essential New Features',
      date: '2024-09-20',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'aspnetcore',
      tags: ['ASP.NET Core 8', 'New Features', 'Performance', 'Minimal APIs'],
      excerpt: 'Discover the most important features of ASP.NET Core 8 for developers.',
      content: `<h2>1. Native AOT for APIs</h2>
        <p>Ahead-Of-Time compilation to reduce deployment size and improve startup.</p>
        <pre><code>&lt;!-- In .csproj --&gt;
&lt;PropertyGroup&gt;
  &lt;PublishAot&gt;true&lt;/PublishAot&gt;
&lt;/PropertyGroup&gt;</code></pre>

        <h2>2. Minimal API Improvements</h2>
        <pre><code>app.MapGet("/products", async (AppDbContext db) =&gt;
  await db.Products.ToListAsync());

app.MapPost("/products", async (Product product, AppDbContext db) =&gt;
{
  db.Products.Add(product);
  await db.SaveChangesAsync();
  return Results.Created($"/products/{product.Id}", product);
});</code></pre>

        <h2>3. Keyed Services in IoC</h2>
        <pre><code>services.AddKeyedSingleton&lt;ICacheService, RedisCacheService&gt;("redis");
services.AddKeyedSingleton&lt;ICacheService, MemoryCacheService&gt;("memory");

// Resolution
var cacheService = app.Services.GetRequiredKeyedService&lt;ICacheService&gt;("redis");</code></pre>

        <h2>4. Performance Improvements</h2>
        <ul>
          <li>15% reduction in memory usage</li>
          <li>20% improvement in request throughput</li>
          <li>HTTP pipeline optimization</li>
        </ul>

        <h2>5. New Helpers for Blazor</h2>
        <pre><code>&lt;EditForm Model="user" OnValidSubmit="SaveUser"&gt;
  &lt;DataAnnotationsValidator /&gt;
  &lt;ValidationSummary class="text-danger" /&gt;

  &lt;InputText @bind-Value="user.Name" /&gt;
  &lt;ValidationMessage For="() =&gt; user.Name" /&gt;

  &lt;button type="submit"&gt;Save&lt;/button&gt;
&lt;/EditForm&gt;</code></pre>`
    },
    {
      id: 21,
      title: 'Performance Tuning of .NET Applications',
      date: '2024-10-10',
      image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'performance',
      tags: ['Performance', 'Profiling', 'Optimization', 'Benchmarking'],
      excerpt: 'Advanced techniques to analyze and optimize the performance of your .NET applications.',
      content: `<h2>Analysis Tools</h2>
        <ul>
          <li>Visual Studio Profiler</li>
          <li>dotTrace and dotMemory</li>
          <li>Application Insights</li>
          <li>BenchmarkDotNet</li>
        </ul>

        <h2>Common Optimizations</h2>

        <h3>Memory Management</h3>
        <pre><code>// Using Span&lt;T&gt; to avoid allocations
public static int CountCommas(ReadOnlySpan&lt;char&gt; text)
{
  int count = 0;
  foreach (char c in text)
  {
      if (c == ',') count++;
  }
  return count;
}</code></pre>

        <h3>Collection Optimization</h3>
        <pre><code>// Prefer ArrayPool for temporary arrays
var buffer = ArrayPool&lt;byte&gt;.Shared.Rent(1024);
try
{
  // Use buffer
}
finally
{
  ArrayPool&lt;byte&gt;.Shared.Return(buffer);
}</code></pre>

        <h3>Async and Parallelism</h3>
        <pre><code>// Using ValueTask to avoid allocations
public ValueTask&lt;int&gt; CalculateAsync()
{
  if (_cachedResult != null)
      return new ValueTask&lt;int&gt;(_cachedResult);

  return new ValueTask&lt;int&gt;(LoadFromDatabaseAsync());
}</code></pre>

        <h2>Best Practices</h2>
        <ul>
          <li>Avoid unnecessary allocations</li>
          <li>Use structs instead of classes for small objects</li>
          <li>Limit the use of reflection</li>
        </ul>`
    },
    {
      id: 22,
      title: 'Future of .NET: ASP.NET Core 9 and C# 12',
      date: '2025-01-15',
      image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      category: 'future',
      tags: ['ASP.NET Core 9', 'C# 12', 'Innovation', 'Roadmap'],
      excerpt: 'Forecast of upcoming features in ASP.NET Core 9 and C# 12 based on Microsoft roadmap.',
      content: `<h2>ASP.NET Core 9: Main Directions</h2>
        <ul>
          <li><strong>Extended Native AOT</strong>: Full support for Blazor applications</li>
          <li><strong>WebAssembly Multi-Threading</strong>: Performance improvements</li>
          <li><strong>HTTP/3 by Default</strong>: Better network performance</li>
        </ul>

        <h2>C# 12: New Features</h2>

        <h3>Primary Constructors</h3>
        <pre><code>public class User(string name, string email)
{
  public string Name { get; } = name;
  public string Email { get; } = email;
}</code></pre>

        <h3>Extension Everything</h3>
        <pre><code>extension IntExtensions for int
{
  public bool IsEven() =&gt; this % 2 == 0;
}

// Usage
if (5.IsEven()) { ... }</code></pre>

        <h3>Improved Pattern Matching</h3>
        <pre><code>if (user is { Address.City: "Paris", Age: > 18 and < 65 })
{
  // ...
}</code></pre>

        <h2>Other Expected Innovations</h2>
        <ul>
          <li>Better support for AI/ML in the framework</li>
          <li>Deeper integration with WebGPU</li>
          <li>Improved development tools for profiling</li>
        </ul>

        <h2>Conclusion</h2>
        <p>The .NET ecosystem continues to evolve rapidly, with a particular focus on performance, productivity, and modern applications.</p>`
    }
  ]
}

// Liste complète des catégories avec traductions
// Liste complète des catégories avec traductions
const categories = {
  security: { fr: 'Sécurité', en: 'Security' },
  performance: { fr: 'Performance', en: 'Performance' },
  architecture: { fr: 'Architecture', en: 'Architecture' },
  quickstart: { fr: 'Démarrage rapide', en: 'Quick Start' },
  tests: { fr: 'Tests', en: 'Tests' },
  entityframework: { fr: 'Entity Framework', en: 'Entity Framework' },
  microservices: { fr: 'Microservices', en: 'Microservices' },
  designpatterns: { fr: 'Design Patterns', en: 'Design Patterns' },
  bestpractices: { fr: 'Bonnes pratiques', en: 'Best Practices' },
  api: { fr: 'API', en: 'API' },
  web: { fr: 'Web', en: 'Web' },
  devops: { fr: 'DevOps', en: 'DevOps' },
  future: { fr: 'Futur', en: 'Future' },
  aspnetcore: { fr: 'ASP.NET Core', en: 'ASP.NET Core' },
  services: { fr: 'Services', en: 'Services' }
}

// Ajout des traductions pour l'interface
const translations = {
  backToArticles: {
    fr: 'Retour aux articles',
    en: 'Back to articles'
  },
  readMore: {
    fr: 'Lire la suite',
    en: 'Read more'
  },
  featured: {
    fr: 'À la une',
    en: 'Featured'
  },
  recentArticles: {
    fr: 'Articles récents',
    en: 'Recent articles'
  },
  allCategories: {
    fr: 'Toutes les catégories',
    en: 'All categories'
  },
  searchPlaceholder: {
    fr: 'Rechercher des articles...',
    en: 'Search articles...'
  }
}

export const useArticleStore = defineStore('articleStore', {
  state: () => ({
    articlesData: articles,
    categoriesData: categories,
    translationsData: translations,
    currentPage: 1,
    itemsPerPage: 5,
    currentLanguage: 'fr',
     lastViewedArticleId: null // Nouvel état pour sauvegarder le dernier article consulté
  }),

  getters: {
    articles(state) {
      return state.articlesData[state.currentLanguage] || []
    },

    featuredArticle() {
      const articles = this.articles
      if (articles.length === 0) return null

      return [...articles].sort((a, b) =>
        new Date(b.date) - new Date(a.date)
      )[0]
    },

    recentArticles() {
      const articles = this.articles
      if (articles.length === 0) return []

      return [...articles]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .filter(article => article.id !== this.featuredArticle?.id)
        .slice(0, 5)
    },

    paginatedArticles() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      return this.sortedArticles.slice(start, start + this.itemsPerPage)
    },

    totalPages() {
      return Math.ceil(this.sortedArticles.length / this.itemsPerPage)
    },

    sortedArticles() {
      const articles = this.articles
      if (articles.length === 0) return []

      return [...articles]
        .filter(article => article.id !== this.featuredArticle?.id)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
    },

    getArticleById: (state) => (id) => {
      const articles = state.articlesData[state.currentLanguage] || []
      return articles.find(article => article.id === id)
    },

    categories(state) {
      return state.categoriesData
    },

    translations(state) {
      return state.translationsData
    },

    getCategoryName: (state) => (categoryKey) => {
      if (!state.categoriesData[categoryKey]) {
        console.warn(`Catégorie inconnue: ${categoryKey}`)
        return categoryKey
      }
      return state.categoriesData[categoryKey][state.currentLanguage] || categoryKey
    },

    t: (state) => (key) => {
      return state.translationsData[key]?.[state.currentLanguage] || key
    }
  },

  actions: {
    setPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page
      }
    },

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++
      }


    },

    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    },

    setLanguage(lang) {
      if (this.articlesData[lang]) {
        this.currentLanguage = lang
        this.currentPage = 1

        // Sauvegarder la préférence de langue
        localStorage.setItem('preferredLanguage', lang)
      }
    },

    // Formatage des dates selon la langue
    formatDate(dateString) {
      const date = new Date(dateString)
      const locale = this.currentLanguage === 'fr' ? 'fr-FR' : 'en-US'

      return date.toLocaleDateString(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    },

    // Initialiser la langue au chargement
    initLanguage() {
      const savedLang = localStorage.getItem('preferredLanguage')
      const browserLang = navigator.language.startsWith('fr') ? 'fr' : 'en'
      this.setLanguage(savedLang || browserLang)
    },

    setLastViewedArticle(articleId) {
      this.lastViewedArticleId = articleId;
    },

    clearLastViewedArticle() {
      this.lastViewedArticleId = null;
    }
  }
})
