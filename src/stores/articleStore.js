import { defineStore } from 'pinia'

// Base de données des articles
const articles = [
  {
    id: 22,
    title: 'Sécuriser une application Spring Boot avec Spring Security',
    // author: 'Marie Lambert',
    date: '15 Juillet 2025',
    image:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Sécurité',
    tags: ['Spring Security', 'Authentification', 'JWT', 'Spring Boot'],
    excerpt:
      "Apprenez à protéger votre application Spring Boot en implémentant l'authentification et l'autorisation.",
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
      </ul>`,
  },
  {
    id: 21,
    title: 'Introduction à Spring Boot : Créer votre première application',
    // author: 'Thomas Martin',
    date: '10 Juillet 2025',
    image:
      'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Démarrage rapide',
    tags: ['Spring Boot', 'Java', 'Maven', 'Démarrage rapide'],
    excerpt:
      'Découvrez comment créer votre première application Spring Boot en quelques étapes simples.',
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
      <p>Avec Spring Boot, vous pouvez démarrer un projet en minutes grâce à son auto-configuration et ses starters.</p>`,
  },
  {
    id: 1,
    title: 'Les 10 principes SOLID que tout développeur .NET doit connaître',
    author: 'Jean Dupont',
    date: '15 Juin 2023',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Architecture',
    tags: ['SOLID', 'C#', 'Architecture', 'Best Practices'],
    excerpt:
      'Découvrez comment appliquer les principes SOLID dans vos projets .NET pour créer un code plus maintenable, évolutif et robuste.',
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
      <p>L'application des principes SOLID dans vos projets .NET vous permettra de créer un code plus robuste et évolutif. Ces principes sont essentiels pour tout développeur .NET qui souhaite progresser dans sa carrière.</p>`,
  },
  {
    id: 2,
    title: 'Optimisation des performances dans ASP.NET Core',
    author: 'Marie Lambert',
    date: '8 Juin 2023',
    image:
      'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Performance',
    tags: ['ASP.NET Core', 'Performance', 'Optimisation', 'C#'],
    excerpt:
      'Explorez des techniques avancées pour améliorer les performances de vos applications ASP.NET Core.',
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
      <p>En appliquant ces techniques, vous pouvez significativement améliorer les performances de vos applications ASP.NET Core. L'optimisation est un processus continu qui nécessite une surveillance constante et des ajustements réguliers.</p>`,
  },
  {
    id: 3,
    title: 'Guide complet des tests unitaires en .NET',
    author: 'Thomas Martin',
    date: '1 Juin 2023',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Tests',
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
      <p>Les tests unitaires sont un investissement qui paie à long terme. En suivant ce guide, vous serez en mesure de créer une suite de tests robuste qui protégera votre application contre les régressions.</p>`,
  },
  {
    id: 4,
    title: 'Implémentation du pattern CQRS avec MediatR',
    author: 'Jean Dupont',
    date: '12 Juillet 2023',
    image:
      'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Architecture',
    tags: ['CQRS', 'MediatR', 'Clean Architecture', 'ASP.NET Core'],
    excerpt:
      'Découvrez comment implémenter efficacement le pattern CQRS dans vos applications .NET avec MediatR.',
    content: `<h2>Comprendre le pattern CQRS</h2>
      <p>CQRS (Command Query Responsibility Segregation) est un pattern architectural qui sépare les opérations de lecture et d'écriture dans une application.</p>

      <h2>1. Configuration de MediatR</h2>
      <pre><code>services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(Assembly.GetExecutingAssembly()));</code></pre>

      <h2>2. Création des commandes</h2>
      <pre><code>public class CreateUserCommand : IRequest<int>
{
  public string Name { get; set; }
  public string Email { get; set; }
}

public class CreateUserCommandHandler : IRequestHandler<CreateUserCommand, int>
{
  public async Task<int> Handle(CreateUserCommand request, CancellationToken cancellationToken)
  {
      // Logique de création d'utilisateur
      return userId;
  }
}</code></pre>

      <h2>3. Création des queries</h2>
      <pre><code>public class GetUserQuery : IRequest<UserDto>
{
  public int Id { get; set; }
}

public class GetUserQueryHandler : IRequestHandler<GetUserQuery, UserDto>
{
  public async Task<UserDto> Handle(GetUserQuery request, CancellationToken cancellationToken)
  {
      // Logique de récupération d'utilisateur
      return userDto;
  }
}</code></pre>

      <h2>4. Avantages dans une Clean Architecture</h2>
      <p>CQRS s'intègre parfaitement avec une Clean Architecture en isolant les préoccupations et en améliorant la maintenabilité.</p>

      <h2>Conclusion</h2>
      <p>L'utilisation de MediatR pour implémenter CQRS simplifie considérablement la structure de vos applications .NET tout en améliorant leur évolutivité.</p>`,
  },
  {
    id: 5,
    title: 'Sécuriser vos APIs avec JWT et Identity',
    author: 'Marie Lambert',
    date: '5 Août 2023',
    image:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Sécurité',
    tags: ['JWT', 'Identity', 'ASP.NET Core', 'Authentication'],
    excerpt:
      "Guide complet pour implémenter l'authentification JWT dans vos APIs ASP.NET Core avec Identity.",
    content: `<h2>Configuration de JWT dans ASP.NET Core</h2>
      <pre><code>services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
  .AddJwtBearer(options =>
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
      <pre><code>services.AddAuthorization(options =>
{
  options.AddPolicy("AdminOnly", policy =>
      policy.RequireRole("Admin"));

  options.AddPolicy("PremiumUser", policy =>
      policy.RequireClaim("Subscription", "Premium"));
});</code></pre>

      <h2>Meilleures pratiques</h2>
      <ul>
        <li>Utilisez des tokens de courte durée (15-30 min)</li>
        <li>Implémentez un système de refresh tokens</li>
        <li>Ne stockez jamais de données sensibles dans les tokens</li>
      </ul>`,
  },
  {
    id: 6,
    title: 'EF Core : Optimisation des requêtes et migrations',
    author: 'Thomas Martin',
    date: '18 Septembre 2023',
    image:
      'https://images.unsplash.com/photo-1555068172-43f6d9c731b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Entity Framework',
    tags: ['EF Core', 'ORM', 'Performance', 'Migrations'],
    excerpt:
      'Techniques avancées pour optimiser vos requêtes EF Core et gérer efficacement les migrations.',
    content: `<h2>Optimisation des requêtes EF Core</h2>
      <p>Entity Framework Core est puissant mais nécessite une bonne compréhension pour éviter les pièges de performance.</p>

      <h3>1. Utilisation de AsNoTracking</h3>
      <pre><code>var users = await context.Users
  .AsNoTracking()
  .ToListAsync();</code></pre>

      <h3>2. Projection avec Select</h3>
      <pre><code>var userDtos = await context.Users
  .Select(u => new UserDto
  {
      Id = u.Id,
      FullName = u.FirstName + " " + u.LastName
  })
  .ToListAsync();</code></pre>

      <h3>3. Chargement explicite vs eager loading</h3>
      <pre><code>// Eager loading
var orders = context.Orders
  .Include(o => o.Customer)
  .ThenInclude(c => c.Address)
  .ToList();

// Explicit loading
var order = context.Orders.Find(orderId);
context.Entry(order)
  .Collection(o => o.Items)
  .Load();</code></pre>

      <h2>Gestion des migrations</h2>
      <pre><code>dotnet ef migrations add InitialCreate
dotnet ef database update
dotnet ef migrations script</code></pre>

      <h2>Conclusion</h2>
      <p>Une utilisation judicieuse d'EF Core peut considérablement améliorer les performances de votre application tout en simplifiant l'accès aux données.</p>`,
  },
  {
    id: 7,
    title: 'Microservices avec .NET et Docker',
    author: 'Jean Dupont',
    date: '10 Octobre 2023',
    image:
      'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Architecture',
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
      </ul>`,
  },
  {
    id: 8,
    title: 'Clean Architecture dans les projets .NET',
    author: 'Marie Lambert',
    date: '5 Novembre 2023',
    image:
      'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Architecture',
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
      <pre><code>Presentation -> Application -> Domain
Infrastructure -> Application -> Domain</code></pre>

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
      </ul>`,
  },
  {
    id: 9,
    title: 'Pattern Repository avec EF Core',
    author: 'Thomas Martin',
    date: '15 Décembre 2023',
    image:
      'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Design Patterns',
    tags: ['Repository', 'EF Core', 'Unit of Work', 'Data Access'],
    excerpt: 'Implémentation moderne du pattern Repository avec Entity Framework Core.',
    content: `<h2>Interface générique de repository</h2>
      <pre><code>public interface IRepository<T> where T : class
{
  Task<T> GetByIdAsync(int id);
  Task<IEnumerable<T>> GetAllAsync();
  Task AddAsync(T entity);
  void Update(T entity);
  void Delete(T entity);
  Task SaveChangesAsync();
}</code></pre>

      <h2>Implémentation avec EF Core</h2>
      <pre><code>public class Repository<T> : IRepository<T> where T : class
{
  private readonly DbContext _context;
  private readonly DbSet<T> _dbSet;

  public Repository(DbContext context)
  {
      _context = context;
      _dbSet = context.Set<T>();
  }

  public async Task<T> GetByIdAsync(int id)
  {
      return await _dbSet.FindAsync(id);
  }

  public async Task<IEnumerable<T>> GetAllAsync()
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
  IRepository<User> Users { get; }
  IRepository<Order> Orders { get; }
  Task CompleteAsync();
}

public class UnitOfWork : IUnitOfWork
{
  private readonly AppDbContext _context;

  public UnitOfWork(AppDbContext context)
  {
      _context = context;
      Users = new Repository<User>(context);
      Orders = new Repository<Order>(context);
  }

  public IRepository<User> Users { get; }
  public IRepository<Order> Orders { get; }

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
}</code></pre>`,
  },
  {
    id: 10,
    title: 'Logging avancé avec Serilog dans .NET',
    author: 'Jean Dupont',
    date: '20 Janvier 2024',
    image:
      'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Best Practices',
    tags: ['Logging', 'Serilog', 'Diagnostics', 'Monitoring'],
    excerpt:
      'Configuration avancée de Serilog pour une journalisation efficace dans vos applications .NET.',
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
      </ul>`,
  },
  {
    id: 11,
    title: 'Validation avec FluentValidation dans ASP.NET Core',
    author: 'Marie Lambert',
    date: '15 Février 2024',
    image:
      'https://images.unsplash.com/photo-1555068172-43f6d9c731b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Best Practices',
    tags: ['Validation', 'FluentValidation', 'ASP.NET Core', 'Data Integrity'],
    excerpt:
      'Comment implémenter une validation robuste avec FluentValidation dans vos API ASP.NET Core.',
    content: `<h2>Installation et configuration</h2>
      <pre><code>services.AddControllers()
  .AddFluentValidation(fv =>
  {
      fv.RegisterValidatorsFromAssemblyContaining<Startup>();
      fv.AutomaticValidationEnabled = true;
  });</code></pre>

      <h2>Création d'un validateur</h2>
      <pre><code>public class CreateUserValidator : AbstractValidator<CreateUserDto>
{
  public CreateUserValidator()
  {
      RuleFor(x => x.Email)
          .NotEmpty().WithMessage("Email is required")
          .EmailAddress().WithMessage("Invalid email format");

      RuleFor(x => x.Password)
          .NotEmpty()
          .MinimumLength(8)
          .Matches("[A-Z]").WithMessage("Password must contain at least one uppercase letter")
          .Matches("[a-z]").WithMessage("Password must contain at least one lowercase letter")
          .Matches("[0-9]").WithMessage("Password must contain at least one digit");

      RuleFor(x => x.ConfirmPassword)
          .Equal(x => x.Password).WithMessage("Passwords must match");
  }
}</code></pre>

      <h2>Validation dans les controllers</h2>
      <pre><code>[HttpPost]
public async Task<IActionResult> CreateUser([FromBody] CreateUserDto dto)
{
  // La validation est automatiquement exécutée avant d'atteindre cette méthode
  // ...
}</code></pre>

      <h2>Validation custom</h2>
      <pre><code>RuleFor(x => x.Username)
  .MustAsync(async (username, cancellation) =>
  {
      return !await _userService.UsernameExists(username);
  }).WithMessage("Username already exists");</code></pre>

      <h2>Avantages</h2>
      <ul>
        <li>Séparation des préoccupations</li>
        <li>Règles de validation réutilisables</li>
        <li>Messages d'erreur personnalisés</li>
      </ul>`,
  },
  {
    id: 12,
    title: 'Global Exception Handling dans ASP.NET Core',
    author: 'Thomas Martin',
    date: '10 Mars 2024',
    image:
      'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Best Practices',
    tags: ['Error Handling', 'Middleware', 'ASP.NET Core', 'Exceptions'],
    excerpt:
      "Comment implémenter un gestionnaire global d'exceptions pour vos applications ASP.NET Core.",
    content: `<h2>Middleware de gestion des exceptions</h2>
      <pre><code>public class ExceptionMiddleware
{
  private readonly RequestDelegate _next;
  private readonly ILogger<ExceptionMiddleware> _logger;

  public ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger)
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
      <pre><code>app.UseMiddleware<ExceptionMiddleware>();</code></pre>

      <h2>Types d'exceptions custom</h2>
      <pre><code>public class CustomNotFoundException : Exception
{
  public CustomNotFoundException() : base() { }
  public CustomNotFoundException(string message) : base(message) { }
}

public class ValidationException : Exception
{
  public IDictionary<string, string[]> Errors { get; }

  public ValidationException() : base("Validation errors occurred")
  {
      Errors = new Dictionary<string, string[]>();
  }

  public ValidationException(IEnumerable<ValidationFailure> failures)
      : this()
  {
      Errors = failures
          .GroupBy(e => e.PropertyName, e => e.ErrorMessage)
          .ToDictionary(failureGroup => failureGroup.Key, failureGroup => failureGroup.ToArray());
  }
}</code></pre>

      <h2>Avantages</h2>
      <ul>
        <li>Centralisation de la gestion des erreurs</li>
        <li>Réponses d'erreur cohérentes</li>
        <li>Journalisation centralisée</li>
      </ul>`,
  },
  {
    id: 13,
    title: 'Background Services avec Hangfire',
    author: 'Jean Dupont',
    date: '5 Avril 2024',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Services',
    tags: ['Hangfire', 'Background Jobs', 'Queues', 'Scheduling'],
    excerpt: 'Implémentation de tâches en arrière-plan avec Hangfire dans ASP.NET Core.',
    content: `<h2>Configuration de Hangfire</h2>
      <pre><code>services.AddHangfire(config =>
  config.UseSqlServerStorage(Configuration.GetConnectionString("HangfireConnection")));

services.AddHangfireServer();</code></pre>

      <h2>Types de tâches</h2>

      <h3>Tâches immédiates</h3>
      <pre><code>BackgroundJob.Enqueue(() => Console.WriteLine("Fire-and-forget job"));</code></pre>

      <h3>Tâches différées</h3>
      <pre><code>BackgroundJob.Schedule(() => SendWelcomeEmail(userId), TimeSpan.FromMinutes(5));</code></pre>

      <h3>Tâches récurrentes</h3>
      <pre><code>RecurringJob.AddOrUpdate("cleanup-job", () => CleanupService.Cleanup(), Cron.Daily);</code></pre>

      <h2>Tableau de bord</h2>
      <pre><code>app.UseHangfireDashboard();</code></pre>

      <h2>Meilleures pratiques</h2>
      <ul>
        <li>Utilisez des méthodes idempotentes</li>
        <li>Limitez la durée des tâches</li>
        <li>Implémentez des mécanismes de réessai</li>
      </ul>`,
  },
  {
    id: 14,
    title: 'API GraphQL avec HotChocolate dans .NET',
    author: 'Marie Lambert',
    date: '20 Mai 2024',
    image:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'API',
    tags: ['GraphQL', 'HotChocolate', 'API Design', 'Performance'],
    excerpt: 'Comment construire des APIs GraphQL performantes avec HotChocolate dans .NET.',
    content: `<h2>Configuration de base</h2>
      <pre><code>services
  .AddGraphQLServer()
  .AddQueryType<Query>()
  .AddMutationType<Mutation>()
  .AddProjections()
  .AddFiltering()
  .AddSorting();</code></pre>

      <h2>Définition des types</h2>
      <pre><code>public class UserType : ObjectType<User>
{
  protected override void Configure(IObjectTypeDescriptor<User> descriptor)
  {
      descriptor.Field(u => u.Id).Type<NonNullType<IdType>>();
      descriptor.Field(u => u.Name).Type<NonNullType<StringType>>();
      descriptor.Field(u => u.Email).Type<NonNullType<StringType>>();
  }
}

public class Query
{
  [UsePaging]
  [UseProjection]
  [UseFiltering]
  [UseSorting]
  public IQueryable<User> GetUsers([Service] AppDbContext context)
  {
      return context.Users;
  }
}</code></pre>

      <h2>Mutations</h2>
      <pre><code>public class Mutation
{
  public async Task<User> CreateUser(
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
      </ul>`,
  },
  {
    id: 15,
    title: 'Blazor Server vs Blazor WebAssembly',
    author: 'Thomas Martin',
    date: '10 Juin 2024',
    image:
      'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Web',
    tags: ['Blazor', 'WebAssembly', 'SPA', 'ASP.NET Core'],
    excerpt:
      'Comparaison détaillée entre Blazor Server et Blazor WebAssembly pour choisir la meilleure solution.',
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
      </ul>`,
  },
  {
    id: 16,
    title: 'CI/CD pour applications .NET avec GitHub Actions',
    author: 'Jean Dupont',
    date: '15 Juillet 2024',
    image:
      'https://images.unsplash.com/photo-1555068172-43f6d9c731b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'DevOps',
    tags: ['CI/CD', 'GitHub Actions', 'DevOps', 'Automation'],
    excerpt:
      "Mise en place d'un pipeline CI/CD robuste pour vos applications .NET avec GitHub Actions.",
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
    publish-profile: ${{}}
    package: '${{}}/publish'</code></pre>

      <h2>Déploiement de conteneurs</h2>
      <pre><code>- name: Build and push Docker image
  uses: docker/build-push-action@v3
  with:
    context: .
    push: true
    tags: |
      ghcr.io/nexashopify/backend:latest
      ghcr.io/nexashopify/backend:${{}}</code></pre>

      <h2>Meilleures pratiques</h2>
      <ul>
        <li>Séparez les étapes de build et de déploiement</li>
        <li>Utilisez des secrets pour les informations sensibles</li>
        <li>Implémentez des tests de qualité de code</li>
      </ul>`,
  },
  {
    id: 17,
    title: 'Développement piloté par le domaine (DDD) avec .NET',
    author: 'Marie Lambert',
    date: '5 Août 2024',
    image:
      'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Architecture',
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

  protected override IEnumerable<object> GetEqualityComponents()
  {
      yield return Street;
      yield return City;
      yield return PostalCode;
  }
}</code></pre>

      <h3>Aggregates et Root Entities</h3>
      <pre><code>public class Order : AggregateRoot
{
  private readonly List<OrderItem> _items = new List<OrderItem>();
  public IReadOnlyCollection<OrderItem> Items => _items.AsReadOnly();

  public void AddItem(Product product, int quantity)
  {
      var existingItem = _items.FirstOrDefault(i => i.ProductId == product.Id);
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
      </ul>`,
  },
  {
    id: 18,
    title: 'ASP.NET Core 8 : Les nouveautés essentielles',
    author: 'Thomas Martin',
    date: '20 Septembre 2024',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'ASP.NET Core',
    tags: ['ASP.NET Core 8', 'New Features', 'Performance', 'Minimal APIs'],
    excerpt:
      "Découverte des fonctionnalités les plus importantes d'ASP.NET Core 8 pour les développeurs.",
    content: `<h2>1. Native AOT pour les APIs</h2>
      <p>Compilation Ahead-Of-Time pour réduire la taille des déploiements et améliorer le démarrage.</p>
      <pre><code>// Dans .csproj
<PropertyGroup>
  <PublishAot>true</PublishAot>
</PropertyGroup></code></pre>

      <h2>2. Améliorations des Minimal APIs</h2>
      <pre><code>app.MapGet("/products", async (AppDbContext db) =>
  await db.Products.ToListAsync());

app.MapPost("/products", async (Product product, AppDbContext db) =>
{
  db.Products.Add(product);
  await db.SaveChangesAsync();
  return Results.Created($"/products/{product.Id}", product);
});</code></pre>

      <h2>3. Keyed Services dans l'IoC</h2>
      <pre><code>services.AddKeyedSingleton<ICacheService, RedisCacheService>("redis");
services.AddKeyedSingleton<ICacheService, MemoryCacheService>("memory");

// Résolution
var cacheService = app.Services.GetRequiredKeyedService<ICacheService>("redis");</code></pre>

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
  &lt;ValidationMessage For="() => user.Name" /&gt;

  &lt;button type="submit"&gt;Save&lt;/button&gt;
&lt;/EditForm&gt;</code></pre>`,
  },
  {
    id: 19,
    title: 'Performance tuning des applications .NET',
    author: 'Jean Dupont',
    date: '10 Octobre 2024',
    image:
      'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Performance',
    tags: ['Performance', 'Profiling', 'Optimization', 'Benchmarking'],
    excerpt:
      'Techniques avancées pour analyser et optimiser les performances de vos applications .NET.',
    content: `<h2>Outils d'analyse</h2>
      <ul>
        <li>Visual Studio Profiler</li>
        <li>dotTrace et dotMemory</li>
        <li>Application Insights</li>
        <li>BenchmarkDotNet</li>
      </ul>

      <h2>Optimisations courantes</h2>

      <h3>Gestion de la mémoire</h3>
      <pre><code>// Utilisation de Span<T> pour éviter les allocations
public static int CountCommas(ReadOnlySpan<char> text)
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
var buffer = ArrayPool<byte>.Shared.Rent(1024);
try
{
  // Utilisation du buffer
}
finally
{
  ArrayPool<byte>.Shared.Return(buffer);
}</code></pre>

      <h3>Async et parallélisme</h3>
      <pre><code>// Utilisation de ValueTask pour éviter les allocations
public ValueTask<int> CalculateAsync()
{
  if (_cachedResult != null)
      return new ValueTask<int>(_cachedResult);

  return new ValueTask<int>(LoadFromDatabaseAsync());
}</code></pre>

      <h2>Meilleures pratiques</h2>
      <ul>
        <li>Évitez les allocations inutiles</li>
        <li>Utilisez des structures plutôt que des classes pour les petits objets</li>
        <li>Limitez l'utilisation de réflexion</li>
      </ul>`,
  },
  {
    id: 20,
    title: 'Future du .NET : ASP.NET Core 9 et C# 12',
    author: 'Marie Lambert',
    date: '15 Janvier 2025',
    image:
      'https://images.unsplash.com/photo-1555068172-43f6d9c731b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    category: 'Futur',
    tags: ['ASP.NET Core 9', 'C# 12', 'Innovation', 'Roadmap'],
    excerpt:
      'Prévision des fonctionnalités à venir dans ASP.NET Core 9 et C# 12 basée sur la roadmap Microsoft.',
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
  public bool IsEven() => this % 2 == 0;
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
      <p>L'écosystème .NET continue d'évoluer rapidement, avec un accent particulier sur la performance, la productivité et les applications modernes.</p>`,
  },
]

export const useArticleStore = defineStore('articleStore', {
  state: () => ({
    articles: articles,
    currentPage: 1,
    itemsPerPage: 5, // Nombre d'articles par page
  }),
  getters: {
    allArticles(state) {
      return state.articles
    },
    featuredArticle(state) {
      return [...state.articles].sort((a, b) => new Date(b.date) - new Date(a.date))[0]
    },
    recentArticles(state) {
      return [...state.articles].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(1, 6)
    },
    paginatedArticles(state) {
      const start = (state.currentPage - 1) * state.itemsPerPage
      return this.sortedArticles.slice(start, start + state.itemsPerPage)
    },
    totalPages(state) {
      return Math.ceil(this.sortedArticles.length / state.itemsPerPage)
    },
    sortedArticles(state) {
      // Retourne les articles triés par date (sans l'article vedette)
      return [...state.articles]
        .filter((article) => article.id !== this.featuredArticle?.id)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
    },
    getArticleById: (state) => (id) => {
      return state.articles.find((article) => article.id === id)
    },
  },
  actions: {
    setPage(page) {
      this.currentPage = page
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
  },
})
