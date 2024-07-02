using CSS.Creaciones.Pajov.Domain.Entitites;
using CSS.Creaciones.Pajov.Infraestructure.Entities;
using CSS.Creaciones.PAJOV.Application.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CSS.Creaciones.Pajov.Infraestructure.Persistence
{
    public partial class ApplicationDbContext : DbContext, IApplicationDbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }
        public virtual DbSet<Arl> Arls { get; set; }

        public virtual DbSet<CajaCompensacion> CajaCompensacions { get; set; }

        public virtual DbSet<Cliente> Clientes { get; set; }

        public virtual DbSet<Contrato> Contratos { get; set; }

        public virtual DbSet<Departamento> Departamentos { get; set; }

        public virtual DbSet<Empleado> Empleados { get; set; }

        public virtual DbSet<Ep> Eps { get; set; }

        public virtual DbSet<FondoPensione> FondoPensiones { get; set; }

        public virtual DbSet<Genero> Generos { get; set; }

        public virtual DbSet<Municipio> Municipios { get; set; }

        public virtual DbSet<EntregaEjecucionDetalle> EntregaEjecucionDetalles { get; set; }

        public virtual DbSet<OrdenCompra> OrdenCompras { get; set; }

        public virtual DbSet<OrdenCompraDetalle> OrdenCompraDetalles { get; set; }

        public virtual DbSet<Orden> Ordens { get; set; }

        public virtual DbSet<OrdenDetalle> OrdenDetalles { get; set; }

        public virtual DbSet<Pai> Pais { get; set; }

        public virtual DbSet<Proveedor> Proveedors { get; set; }

        public virtual DbSet<Remision> Remisions { get; set; }

        public virtual DbSet<RemisionDetalle> RemisionDetalles { get; set; }

        public virtual DbSet<TipoContrato> TipoContratos { get; set; }

        public virtual DbSet<Tipoidentificacion> Tipoidentificacions { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Arl>(entity =>
            {
                entity.HasKey(e => e.IdArl);

                entity.ToTable("arl");

                entity.Property(e => e.IdArl)
                    .ValueGeneratedOnAdd()
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_arl");
                entity.Property(e => e.Estado)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("estado");
                entity.Property(e => e.NombreArl)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("nombre_arl");
            });

            modelBuilder.Entity<CajaCompensacion>(entity =>
            {
                entity.HasKey(e => e.IdCaja);

                entity.ToTable("caja_compensacion");

                entity.Property(e => e.IdCaja)
                    .ValueGeneratedOnAdd()
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_caja");
                entity.Property(e => e.Estado)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("estado");
                entity.Property(e => e.NombreCaja)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nombre_caja");
            });

            modelBuilder.Entity<Cliente>(entity =>
            {
                entity.HasKey(e => e.IdCliente);

                entity.ToTable("cliente");

                entity.Property(e => e.IdCliente)
                    .ValueGeneratedOnAdd()
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_cliente");
                entity.Property(e => e.CiudadCliente)
                    .HasMaxLength(48)
                    .IsUnicode(false)
                    .HasColumnName("ciudad_cliente");
                entity.Property(e => e.ContactoCliente)
                    .HasMaxLength(60)
                    .IsUnicode(false)
                    .HasColumnName("contacto_cliente");
                entity.Property(e => e.DepartamentoCliente)
                    .HasMaxLength(48)
                    .IsUnicode(false)
                    .HasColumnName("departamento_cliente");
                entity.Property(e => e.DireccionCliente)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("direccion_cliente");
                entity.Property(e => e.EmailCliente)
                    .HasMaxLength(48)
                    .IsUnicode(false)
                    .HasColumnName("email_cliente");
                entity.Property(e => e.EstadoCliente).HasColumnName("estado_cliente");
                entity.Property(e => e.NitCliente)
                    .HasMaxLength(12)
                    .IsUnicode(false)
                    .HasColumnName("nit_cliente");
                entity.Property(e => e.NombreCliente)
                    .HasMaxLength(60)
                    .IsUnicode(false)
                    .HasColumnName("nombre_cliente");
                entity.Property(e => e.PaisCliente)
                    .HasMaxLength(48)
                    .IsUnicode(false)
                    .HasColumnName("pais_cliente");
                entity.Property(e => e.TelefonoCliente)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("telefono_cliente");
            });

            modelBuilder.Entity<Contrato>(entity =>
            {
                entity.HasKey(e => e.IdContrato);

                entity.ToTable("contrato");

                entity.Property(e => e.IdContrato)
                    .ValueGeneratedOnAdd()
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_contrato");
                entity.Property(e => e.EstadoContrato)
                    .HasColumnName("estado_contrato");
                entity.Property(e => e.FechaFinContrato)
                    .HasColumnName("fecha_fin_contrato");
                entity.Property(e => e.FechaInicioContrato)
                    .HasColumnName("fecha_inicio_contrato");
                entity.Property(e => e.IdEmpleado)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_empleado");
                entity.Property(e => e.IdTipoContrato)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_tipo_contrato");
                entity.Property(e => e.SalarioContrato)
                    .HasColumnType("numeric(9, 2)")
                    .HasColumnName("salario_contrato");

                entity.HasOne(d => d.IdEmpleadoNavigation).WithMany(p => p.Contratos)
                    .HasForeignKey(d => d.IdEmpleado);

                entity.HasOne(d => d.IdTipoContratoNavigation).WithMany(p => p.Contratos)
                    .HasForeignKey(d => d.IdTipoContrato);

            });


            modelBuilder.Entity<Departamento>(entity =>
            {
                entity.HasKey(e => e.IdDepartamento);

                entity.ToTable("departamento");

                entity.Property(e => e.IdDepartamento)
                    .ValueGeneratedOnAdd()
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_departamento");
                entity.Property(e => e.EstadoDepartamento)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("estado_departamento");
                entity.Property(e => e.IdPais)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_pais");
                entity.Property(e => e.NombreDepartamento)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nombre_departamento");

                entity.HasOne(d => d.IdPaisNavigation).WithMany(p => p.Departamentos)
                    .HasForeignKey(d => d.IdPais)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_departamento_pais");
            });

            modelBuilder.Entity<EntregaEjecucionDetalle>(entity =>
            {
                entity.HasKey(e => e.IdEntregaEjecucionDetalle);

                entity.ToTable("entrega_ejecucion_detalle");

                entity.Property(e => e.IdEntregaEjecucionDetalle)
                    .ValueGeneratedOnAdd()
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_entrega_ejecucion_detalle");
                entity.Property(e => e.Ciudad)
                    .HasMaxLength(48)
                    .IsUnicode(false)
                    .HasColumnName("ciudad");
                entity.Property(e => e.Contacto)
                    .HasMaxLength(60)
                    .IsUnicode(false)
                    .HasColumnName("contacto");
                entity.Property(e => e.Departamento)
                    .HasMaxLength(48)
                    .IsUnicode(false)
                    .HasColumnName("departamento");
                entity.Property(e => e.Direccion)
                    .HasMaxLength(60)
                    .IsUnicode(false)
                    .HasColumnName("direccion");
                entity.Property(e => e.Email)
                    .HasMaxLength(48)
                    .IsUnicode(false)
                    .HasColumnName("email");
                entity.Property(e => e.Orden)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("orden");
                entity.Property(e => e.Pais)
                    .HasMaxLength(48)
                    .IsUnicode(false)
                    .HasColumnName("pais");
                entity.Property(e => e.Telefono)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("telefono");
            });

            modelBuilder.Entity<Empleado>(entity =>
            {
                entity.HasKey(e => e.IdEmpleado);

                entity.ToTable("empleado");

                entity.Property(e => e.IdEmpleado)
                    .ValueGeneratedOnAdd()
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_empleado");
                entity.Property(e => e.CorreoElectronicoPersonalEmpleado)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("correo_electronico_personal_empleado");
                entity.Property(e => e.DireccionEmpleado)
                    .HasMaxLength(60)
                    .IsUnicode(false)
                    .HasColumnName("direccion_empleado");
                entity.Property(e => e.FechaNacimientoEmpleado)
                    .HasColumnType("datetime")
                    .HasColumnName("fecha_nacimiento_empleado");
                entity.Property(e => e.IdArl)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_arl");
                entity.Property(e => e.IdCaja)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_caja");
                entity.Property(e => e.IdEps)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_eps");
                entity.Property(e => e.IdGenero)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_genero");
                entity.Property(e => e.IdPension)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_pension");
                entity.Property(e => e.IdTipoidentificacion)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_tipoidentificacion");
                entity.Property(e => e.IdentificacionEmpleado)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("identificacion_empleado");
                entity.Property(e => e.MunicipioResidenciaEmpleado)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("municipio_residencia_empleado");
                entity.Property(e => e.PrimerApellidoEmpleado)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("primer_apellido_empleado");
                entity.Property(e => e.PrimerNombreEmpleado)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("primer_nombre_empleado");
                entity.Property(e => e.SegundoApellidoEmpleado)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("segundo_apellido_empleado");
                entity.Property(e => e.SegundoNombreEmpleado)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("segundo_nombre_empleado");
                entity.Property(e => e.TelefonoEmpleado)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("telefono_empleado");
                entity.Property(e => e.TelefonoEmpleadoEmpleado)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("telefono_empleado_empleado");

                entity.HasOne(d => d.IdArlNavigation).WithMany(p => p.Empleados)
                    .HasForeignKey(d => d.IdArl);

                entity.HasOne(d => d.IdCajaNavigation).WithMany(p => p.Empleados)
                    .HasForeignKey(d => d.IdCaja);

                entity.HasOne(d => d.IdEpsNavigation).WithMany(p => p.Empleados)
                    .HasForeignKey(d => d.IdEps);

                entity.HasOne(d => d.IdGeneroNavigation).WithMany(p => p.Empleados)
                    .HasForeignKey(d => d.IdGenero);

                entity.HasOne(d => d.IdPensionNavigation).WithMany(p => p.Empleados)
                    .HasForeignKey(d => d.IdPension);

                entity.HasOne(d => d.IdTipoidentificacionNavigation).WithMany(p => p.Empleados)
                    .HasForeignKey(d => d.IdTipoidentificacion);
            });

            modelBuilder.Entity<Ep>(entity =>
            {
                entity.HasKey(e => e.IdEps);

                entity.ToTable("eps");

                entity.Property(e => e.IdEps)
                    .ValueGeneratedOnAdd()
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_eps");
                entity.Property(e => e.Estado)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("estado");
                entity.Property(e => e.NombreEps)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("nombre_eps");
            });

            modelBuilder.Entity<FondoPensione>(entity =>
            {
                entity.HasKey(e => e.IdPension);

                entity.ToTable("fondo_pensiones");

                entity.Property(e => e.IdPension)
                    .ValueGeneratedOnAdd()
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_pension");
                entity.Property(e => e.Estado)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("estado");
                entity.Property(e => e.NombrePension)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nombre_pension");
            });

            modelBuilder.Entity<Genero>(entity =>
            {
                entity.HasKey(e => e.IdGenero);

                entity.ToTable("genero");

                entity.Property(e => e.IdGenero)
                    .ValueGeneratedOnAdd()
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_genero");
                entity.Property(e => e.EstadoGenero)
                    .HasMaxLength(12)
                    .IsUnicode(false)
                    .HasColumnName("estado_genero");
                entity.Property(e => e.NombreGenero)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("nombre_genero");
            });

            modelBuilder.Entity<Municipio>(entity =>
            {
                entity.HasKey(e => e.IdMunicipio);

                entity.ToTable("municipio");

                entity.Property(e => e.IdMunicipio)
                    .ValueGeneratedOnAdd()
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_municipio");
                entity.Property(e => e.EstadoDepartamento)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("estado_departamento");
                entity.Property(e => e.IdDepartamento)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_departamento");
                entity.Property(e => e.NombreMunicipio)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nombre_municipio");

                entity.HasOne(d => d.IdDepartamentoNavigation).WithMany(p => p.Municipios)
                    .HasForeignKey(d => d.IdDepartamento)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_municipio_departamento");
            });
            modelBuilder.Entity<OrdenCompra>(entity =>
            {
                entity.HasKey(e => e.IdOrdenCompra);

                entity.ToTable("orden_compra");

                entity.Property(e => e.IdOrdenCompra)
                    .ValueGeneratedOnAdd()
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_orden_compra");
                entity.Property(e => e.CantidadTotal)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("cantidad_total");
                entity.Property(e => e.CodigoMoneda)
                    .HasMaxLength(3)
                    .IsUnicode(false)
                    .HasColumnName("codigo_moneda");
                entity.Property(e => e.FechaElaboracion)
                    .HasColumnType("datetime")
                    .HasColumnName("fecha_elaboracion");
                entity.Property(e => e.GrupoCompra)
                    .HasMaxLength(48)
                    .IsUnicode(false)
                    .HasColumnName("grupo_compra");
                entity.Property(e => e.IdCliente)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_cliente");
                entity.Property(e => e.IdEntregaEjecucionDetalle)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_entrega_ejecucion_detalle");
                entity.Property(e => e.IdProveedor)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_proveedor");
                entity.Property(e => e.MetodoPago)
                    .HasMaxLength(12)
                    .IsUnicode(false)
                    .HasColumnName("metodo_pago");
                entity.Property(e => e.Observacion)
                    .HasMaxLength(96)
                    .IsUnicode(false)
                    .HasColumnName("observacion");
                entity.Property(e => e.ValorTotal)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("valor_total");

                entity.HasOne(d => d.IdClienteNavigation).WithMany(p => p.OrdenCompras)
                    .HasForeignKey(d => d.IdCliente);

                entity.HasOne(d => d.IdEntregaEjecucionDetalleNavigation).WithMany(p => p.OrdenCompras)
                    .HasForeignKey(d => d.IdEntregaEjecucionDetalle);

                entity.HasOne(d => d.IdProveedorNavigation).WithMany(p => p.OrdenCompras)
                    .HasForeignKey(d => d.IdProveedor);
            });

            modelBuilder.Entity<OrdenCompraDetalle>(entity =>
            {
                entity.HasKey(e => e.IdOrdenCompraDetalle);

                entity.ToTable("orden_compra_detalle");

                entity.Property(e => e.IdOrdenCompraDetalle)
                    .ValueGeneratedOnAdd()
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_orden_compra_detalle");
                entity.Property(e => e.Cantidad)
                    .HasColumnType("numeric(6, 0)")
                    .HasColumnName("cantidad");
                entity.Property(e => e.Descripcion)
                    .HasMaxLength(60)
                    .IsUnicode(false)
                    .HasColumnName("descripcion");
                entity.Property(e => e.Direccion)
                    .HasMaxLength(60)
                    .IsUnicode(false)
                    .HasColumnName("direccion");
                entity.Property(e => e.FechaEntrega)
                    .HasColumnType("datetime")
                    .HasColumnName("fecha_entrega");
                entity.Property(e => e.IdOrdenCompra)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_orden_compra");
                entity.Property(e => e.Item)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("item");
                entity.Property(e => e.Precio)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("precio");
                entity.Property(e => e.Subtotal)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("subtotal");
                entity.Property(e => e.UnidadMedidad)
                    .HasMaxLength(12)
                    .IsUnicode(false)
                    .HasColumnName("unidad_medidad");

                entity.HasOne(d => d.IdOrdenCompraNavigation).WithMany(p => p.OrdenCompraDetalles)
                    .HasForeignKey(d => d.IdOrdenCompra);
            });

            modelBuilder.Entity<Orden>(entity =>
            {
                entity.HasKey(e => e.IdOrden);

                entity.ToTable("orden");

                entity.Property(e => e.IdOrden)
                    .ValueGeneratedOnAdd()
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_orden");
                entity.Property(e => e.CantidadTotalOrden)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("cantidad_total_orden");
                entity.Property(e => e.FechaElaboracion)
                    .HasColumnType("datetime")
                    .HasColumnName("fecha_elaboracion");
                entity.Property(e => e.FechaEntrega)
                    .HasColumnType("datetime")
                    .HasColumnName("fecha_entrega");
                entity.Property(e => e.Observacion)
                    .HasMaxLength(150)
                    .IsUnicode(false)
                    .HasColumnName("observacion");
                entity.Property(e => e.ValorPago)
                    .HasColumnType("decimal(18, 0)")
                    .HasColumnName("valor_pago");
            });

            modelBuilder.Entity<OrdenDetalle>(entity =>
            {
                entity.HasKey(e => e.IdOrdenDetalle);

                entity.ToTable("orden_detalle");

                entity.Property(e => e.IdOrdenDetalle)
                    .ValueGeneratedOnAdd()
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_orden_detalle");
                entity.Property(e => e.CantidadOrdenDetalle)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("cantidad_orden_detalle");
                entity.Property(e => e.DescripcionOrdenDetalle)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("descripcion_orden_detalle");
                entity.Property(e => e.IdOrden)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_orden");
                entity.Property(e => e.PrecioUnidad)
                    .HasColumnType("decimal(18, 0)")
                    .HasColumnName("precio_unidad");
                entity.Property(e => e.TotalOrdenDetalle)
                    .HasColumnType("decimal(18, 0)")
                    .HasColumnName("total_orden_detalle");

                entity.HasOne(d => d.IdOrdenNavigation).WithMany(p => p.OrdenDetalles)
                    .HasForeignKey(d => d.IdOrden);
            });

            modelBuilder.Entity<Pai>(entity =>
            {
                entity.HasKey(e => e.IdPais);

                entity.ToTable("pais");

                entity.Property(e => e.IdPais)
                    .ValueGeneratedOnAdd()
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_pais");
                entity.Property(e => e.CodigoTelefonicoPais)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("codigo_telefonico_pais");
                entity.Property(e => e.EstadoPais)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("estado_pais");
                entity.Property(e => e.NombrePais)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nombre_pais");
            });

            modelBuilder.Entity<Proveedor>(entity =>
            {
                entity.HasKey(e => e.IdProveedor);

                entity.ToTable("proveedor");

                entity.Property(e => e.IdProveedor)
                    .ValueGeneratedOnAdd()
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_proveedor");
                entity.Property(e => e.CiudadProveedor)
                    .HasMaxLength(48)
                    .IsUnicode(false)
                    .HasColumnName("ciudad_proveedor");
                entity.Property(e => e.ContactoProveedor)
                    .HasMaxLength(60)
                    .IsUnicode(false)
                    .HasColumnName("contacto_proveedor");
                entity.Property(e => e.DepartamentoProveedor)
                    .HasMaxLength(48)
                    .IsUnicode(false)
                    .HasColumnName("departamento_proveedor");
                entity.Property(e => e.DireccionProveedor)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("direccion_proveedor");
                entity.Property(e => e.EmailProveedor)
                    .HasMaxLength(48)
                    .IsUnicode(false)
                    .HasColumnName("email_proveedor");
                entity.Property(e => e.EstadoProveedor).HasColumnName("estado_proveedor");
                entity.Property(e => e.NitProveedor)
                    .HasMaxLength(12)
                    .IsUnicode(false)
                    .HasColumnName("nit_proveedor");
                entity.Property(e => e.NombreProveedor)
                    .HasMaxLength(60)
                    .IsUnicode(false)
                    .HasColumnName("nombre_proveedor");
                entity.Property(e => e.PaisProveedor)
                    .HasMaxLength(48)
                    .IsUnicode(false)
                    .HasColumnName("pais_proveedor");
                entity.Property(e => e.TelefonoProveedor)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("telefono_proveedor");
            });

            modelBuilder.Entity<Remision>(entity =>
            {
                entity.HasKey(e => e.IdRemision);

                entity.ToTable("remision");

                entity.Property(e => e.IdRemision)
                    .ValueGeneratedOnAdd()
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_remision");
                entity.Property(e => e.CantidadRemision)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("cantidad_remision");
                entity.Property(e => e.CategoriaRemision)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("categoria_remision");
                entity.Property(e => e.FechaRemision)
                    .HasColumnType("datetime")
                    .HasColumnName("fecha_remision");
                entity.Property(e => e.IdCliente)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_cliente");
                entity.Property(e => e.IdOrdenCompra)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_orden_compra");

                entity.HasOne(d => d.IdClienteNavigation).WithMany(p => p.Remisions)
                    .HasForeignKey(d => d.IdCliente);

                entity.HasOne(d => d.IdOrdenCompraNavigation).WithMany(p => p.Remisions)
                    .HasForeignKey(d => d.IdOrdenCompra);
            });

            modelBuilder.Entity<RemisionDetalle>(entity =>
            {
                entity.HasKey(e => e.IdRemisionDetalle);

                entity.ToTable("remision_detalle");

                entity.Property(e => e.IdRemisionDetalle)
                    .ValueGeneratedOnAdd()
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_remision_detalle");
                entity.Property(e => e.CantidadRemisionDetalle)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("cantidad_remision_detalle");
                entity.Property(e => e.DescripcionRemisionDetalle)
                    .HasMaxLength(80)
                    .IsUnicode(false)
                    .HasColumnName("descripcion_remision_detalle");
                entity.Property(e => e.IdRemision)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_remision");
                entity.Property(e => e.ReferenciaRemisionDetalle)
                    .HasMaxLength(60)
                    .IsUnicode(false)
                    .HasColumnName("referencia_remision_detalle");
                entity.Property(e => e.TallaRemisionDetalle)
                    .HasMaxLength(1)
                    .IsUnicode(false)
                    .HasColumnName("talla_remision_detalle");

                entity.HasOne(d => d.IdRemisionNavigation).WithMany(p => p.RemisionDetalles)
                    .HasForeignKey(d => d.IdRemision);
            });

            modelBuilder.Entity<TipoContrato>(entity =>
            {
                entity.HasKey(e => e.IdTipoContrato);

                entity.ToTable("tipo_contrato");

                entity.Property(e => e.IdTipoContrato)
                    .ValueGeneratedOnAdd()
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_tipo_contrato");
                entity.Property(e => e.DescripcionContrato)
                    .HasMaxLength(84)
                    .IsUnicode(false)
                    .HasColumnName("descripcion_contrato");
                entity.Property(e => e.EstadoContrato)
                    .HasColumnName("estado_contrato");
                entity.Property(e => e.NombreContrato)
                    .HasMaxLength(60)
                    .IsUnicode(false)
                    .HasColumnName("nombre_contrato");
            });

            modelBuilder.Entity<Tipoidentificacion>(entity =>
            {
                entity.HasKey(e => e.IdTipoidentificacion);

                entity.ToTable("tipoidentificacion");

                entity.Property(e => e.IdTipoidentificacion)
                    .ValueGeneratedOnAdd()
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("id_tipoidentificacion");
                entity.Property(e => e.EstadoTipoidentificacion)
                    .HasMaxLength(12)
                    .IsUnicode(false)
                    .HasColumnName("estado_tipoidentificacion");
                entity.Property(e => e.NombreTipoidentificacion)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nombre_tipoidentificacion");
            });

            OnModelCreatingPartial(modelBuilder);
        }
        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);

    }
}
