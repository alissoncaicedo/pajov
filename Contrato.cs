using CSS.Creaciones.Pajov.Infraestructure.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSS.Creaciones.Pajov.Domain.Entitites
{
    public partial class Contrato
    {
        public decimal IdContrato { get; set; }

        public decimal IdEmpleado { get; set; }

        public decimal IdTipoContrato { get; set; }

        public DateOnly FechaInicioContrato { get; set; }

        public DateOnly? FechaFinContrato { get; set; }

        public decimal? SalarioContrato { get; set; }

        public bool EstadoContrato { get; set; }

        public virtual Empleado IdEmpleadoNavigation { get; set; } = null!;

        public virtual TipoContrato IdTipoContratoNavigation { get; set; } = null!;
    }
}
